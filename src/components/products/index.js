import React, { useContext, useState, useEffect } from 'react';
import { PerfilContext } from '../../contexts';
import './styles.css';

const Products = () => {
    const { products, deleteProduct, postProducts, errorPost, setErrorPost, findById, putProduct } = useContext(PerfilContext);
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nameValid, setNameValid] = useState(true);
    const [brandValid, setBrandValid] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    useEffect(() => {
        if (errorPost.length > 0) {
            alert(errorPost);
        }
    }, [errorPost]);

    function registerProduct() {
        if (name.trim() === '') {
            setNameValid(false);
            return;
        } else {
            setNameValid(true);
        }

        if (brand.trim() === '') {
            setBrandValid(false);
            return;
        } else {
            setBrandValid(true);
        }

        postProducts(name, brand);
        setTimeout(() => {
            setErrorPost([]);
        }, 2000);
    }

    async function byId(productId) {
        setIsLoading(true);
        try {
            const response = await findById(productId);
            setId(response.id);
            setName(response.name);
            setBrand(response.brand);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.log("Ocorreu um erro ao buscar o produto pelo ID:", error);
        } finally {
            setIsLoading(false);
        }
    }

    function updateProduct() {
        const productId = parseInt(id);
        putProduct(productId, name, brand);
    }

    function clearFields() {
        setId('');
        setName('');
        setBrand('');
    }

    function confirmDeleteProduct(product) {
        setProductToDelete(product);
        setShowConfirmation(true);
    }

    function cancelDelete() {
        setShowConfirmation(false);
    }

    function deleteConfirmed() {
        deleteProduct(productToDelete.id);
        setShowConfirmation(false);
    }


    return (
        <div className='products'>
            {showConfirmation && (
                <div className="overlay" onClick={cancelDelete}></div>
            )}
            <form className='area'>
                <div className='formName'>
                    <label>ID</label><br />
                    <input required type='text' readOnly={true} placeholder='Product ID' className='fieldName' value={id} />
                </div>
                <div className='formName'>
                    <label htmlFor='product-name'>Name</label><br />
                    <input id='product-name' required type='text' placeholder='Product name' className={`fieldName ${nameValid ? 'valid' : 'invalid'}`} value={name} onChange={(text) => setName(text.target.value)} disabled={isLoading} />
                </div>
                <div className='formBrand'>
                    <label htmlFor='product-brand'>Brand</label><br />
                    <input id='product-brand' required type='text' placeholder='Product brand' className={`fieldBrand ${brandValid ? 'valid' : 'invalid'}`} value={brand} onChange={(text) => setBrand(text.target.value)} disabled={isLoading} />
                </div>
                {
                    id === '' ?
                        <button disabled={isLoading} type='submit' className='buttonPost' onClick={() => registerProduct()}>
                            Save
                        </button> :
                        <div className='products__buttons'>
                            <button disabled={isLoading} type='submit' className='buttonPut' onClick={() => updateProduct()} >
                                Update
                            </button>
                            <button disabled={isLoading} type='submit' className='buttonCancel' onClick={() => { clearFields(); }}>
                                Cancel
                            </button>
                        </div>
                }

            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((element) => (
                            <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.brand}</td>
                                <td>
                                    <button className='buttonEdit' onClick={() => byId(element.id)}>Edit</button>
                                    <button className='buttonDelete' onClick={() => confirmDeleteProduct(element)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {showConfirmation && (
                <div className="confirmation-modal">
                    <p>Are you sure you want to delete {productToDelete.name}?</p>
                    <button onClick={deleteConfirmed}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            )}
        </div>
    )
}

export default Products;