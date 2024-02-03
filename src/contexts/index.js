import React, {useState, createContext, useEffect} from 'react';
import api from '../service/api';

export const PerfilContext = createContext({});

const ContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const getData = async() => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.log("Ocorreu um erro: " + error);
        }
    }
    
    
    useEffect(() => {
        getData();
    }, []);
    
    return(
        <PerfilContext.Provider value={{
            products
        }}>
            {children}
        </PerfilContext.Provider>
    )
} 

export default ContextProvider;