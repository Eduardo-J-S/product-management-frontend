import React, { useContext, useState, useEffect } from 'react';
import { PerfilContext } from '../../contexts';
import './styles.css';

const Products = () => {
    const { products, deleteProduct, postProducts, errorPost, setErrorPost, findById, putProduct } = useContext(PerfilContext);
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (errorPost.length > 0) {
            alert(errorPost);
        }
    }, [errorPost]);

    function showName() {
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

    function clearFields(){
        setId('');
        setName('');
        setBrand('');
    }


    return (
        <div className='products'>
            <form className='area'>
                <div className='formName'>
                    <label>ID</label><br />
                    <input required type='text' readOnly={true} placeholder='Product ID' className='fieldName' value={id} />
                </div>
                <div className='formName'>
                    <label>Name</label><br />
                    <input required type='text' placeholder='Product name' className='fieldName' value={name} onChange={(text) => setName(text.target.value)} disabled={isLoading} />
                </div>
                <div className='formBrand'>
                    <label>Brand</label><br />
                    <input required type='text' placeholder='Product brand' className='fieldBrand' value={brand} onChange={(text) => setBrand(text.target.value)} disabled={isLoading} />
                </div>
                {
                    id === '' ? 
                    <button disabled={isLoading} type='submit' className='buttonPost' onClick={() => showName()}>
                        Save
                    </button> :
                    <div>
                        <button disabled={isLoading} type='submit' className='buttonPost' onClick={() => updateProduct()} >
                            Update
                        </button>
                        <button disabled={isLoading} type='submit' className='buttonPost'  onClick={() => {clearFields();}}>
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
                                <td><button className='buttonEdit' onClick={() => byId(element.id)}>Edit</button> <button className='buttonDelete' onClick={() => deleteProduct(element.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products;