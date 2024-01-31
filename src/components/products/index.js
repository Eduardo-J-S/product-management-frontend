import './styles.css';

const Products = () => {

    const productsTable = [
        {
            "id": 1,
            "name": "Produto 1",
            "brand": "Marca A"
        },
        {
            "id": 2,
            "name": "Produto 2",
            "brand": "Marca B"
        },
        {
            "id": 3,
            "name": "Produto 3",
            "brand": "Marca C"
        },
    ]

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
                        productsTable.map((element, index) => (
                            <tr key={index}>
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