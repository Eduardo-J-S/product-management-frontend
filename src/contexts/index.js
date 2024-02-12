import React, { useState, createContext, useEffect } from 'react';
import api from '../service/api';

export const PerfilContext = createContext({});

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [errorPost, setErrorPost] = useState([]);


    const findById = async (id) => {
        try {
            const response = await api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                console.log("Erro de resposta do servidor:", error.response.data);
                throw new Error(error.response.data.toString());
            } else if (error.request) {
                console.log("Sem resposta do servidor");
            } else {
                console.log("Erro ao configurar a solicitação:", error.message);
            }
        }
    }
    

    const getAllProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.log("Ocorreu um erro: " + error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const response = await api.delete(`/products/${id}`)
            getAllProducts();
            console.log(response.data)
        } catch (error) {
            console.log("Ocorreu um erro: " + error);
        }
    }

    const postProducts = async (name, brand) => {
        try {
            const response = await api.post('/products', {
                "name": name,
                "brand": brand
            });
            getAllProducts();
            console.log(response.data)
        } catch (error) {
            if (error.response) {
                console.log("Erro de resposta do servidor:", error.response.data);
                setErrorPost(error.response.data.toString())
            } else if (error.request) {
                console.log("Sem resposta do servidor");
            } else {
                console.log("Erro ao configurar a solicitação:", error.message);
            }
        }
    }

    const putProduct = async (id, name, brand) => {
        try {
            const response = await api.put(`/products/${id}`, {
                "name": name,
                "brand": brand
            })
            getAllProducts();
            console.log(response.data)
        } catch (error) {
            if (error.response) {
                console.log("Erro de resposta do servidor:", error.response.data);
                setErrorPost(error.response.data.toString())
            } else if (error.request) {
                console.log("Sem resposta do servidor");
            } else {
                console.log("Erro ao configurar a solicitação:", error.message);
            }
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <PerfilContext.Provider value={{
            products, deleteProduct, postProducts, errorPost, setErrorPost, putProduct, findById
        }}>
            {children}
        </PerfilContext.Provider>
    )
}

export default ContextProvider;