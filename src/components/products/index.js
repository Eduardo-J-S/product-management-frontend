import React, { useContext } from 'react';
import { PerfilContext } from '../../contexts';
import './styles.css';

const Products = () => {
    const { products } = useContext(PerfilContext);

    console.log(products)

    return (
        <div className=''>
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
                                <td>View/Edit</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products;