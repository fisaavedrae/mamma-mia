import React, { useContext, useEffect } from 'react'
import { MyContext } from './context/MyContext'
import json from './json/productos.json'

const ReadAPI = props => {
    const { setProductos } = useContext(MyContext)
    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        try {
            setProductos(json)
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    };

    return (
        <></>
    )
}



export default ReadAPI