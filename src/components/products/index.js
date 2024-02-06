import React, { useContext, useState, useEffect } from 'react';
import { PerfilContext } from '../../contexts';
import './styles.css';

const Products = () => {
    const { products, deleteProduct, postProducts, errorPost, setErrorPost } = useContext(PerfilContext);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');

    useEffect(() => {
        if (errorPost.length > 0) {
            alert(errorPost);
        }
    }, [errorPost]);

    async function showName() {
        console.log(name)
        console.log(brand)
        await postProducts(name, brand);
        setTimeout(() => {
            setErrorPost([]);
        }, 2000);
    }

    return (
        <div className='products'>
            <form className='area'>
                <div className='formName'>
                    <label>Name</label><br />
                    <input required type='text' placeholder='Product name' className='fieldName' value={name} onChange={(text) => setName(text.target.value)} />
                </div>
                <div className='formBrand'>
                    <label>Brand</label><br />
                    <input required type='text' placeholder='Product brand' className='fieldBrand' value={brand} onChange={(text) => setBrand(text.target.value)} />
                </div>
                <button type='submit' className='buttonPost' onClick={() => showName()}>
                    Save
                </button>
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
                                <td><button className='buttonEdit'>Edit</button> <button className='buttonDelete' onClick={() => deleteProduct(element.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products;