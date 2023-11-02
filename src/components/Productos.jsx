import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from './context/MyContext'
import { useContext } from 'react';


const Productos = props => {
    const { total, setTotal, productos, carro, setCarro } = useContext(MyContext)

    const navigate = useNavigate();
    const irAProducto = (id) => {
        navigate(`/pizza/${id}`);
    };

    const agregarCarrito = (obj) => {
        setTotal(Number(total) + Number(obj.price))
        const indice = carro.findIndex(item => item.id === obj.id)

        if (indice !== -1) {
            carro[indice].qty = Number(obj.qty) + 1
            console.log('carro antes de eliminar', carro)
            setCarro([...carro])
        }
        else {
            obj.qty = 1
            carro.push(obj)
            setCarro(carro)
        }

    }

    const products = productos
    return (
        <>

            <div className="mx-auto max-w-2xl px-4 py-1 sm:px-0  lg:max-w-7xl lg:px-8 pb-10 pt-0">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (

                        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">

                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />

                            </div>
                            <div className="px-5 py-5 w-full">

                                <div className="font-bold text-xl mb-2">{product.name}</div>
                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900">Ingredientes</h3>
                                    <div className="mt-4">
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">{product.ingredientes.map((ingrediente) =>
                                            <li key={ingrediente} className="text-gray-400">
                                                <span className="text-gray-600">{ingrediente}</span></li>)}
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-1 text-lg font-medium text-gray-900 pt-5 pb-5">$ {new Intl.NumberFormat('es-CL').format(product.price)}</p>

                                <button
                                    onClick={() => irAProducto(product.id)}
                                    className="rounded-md bg-amber-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Ver Producto
                                </button>
                                <button
                                    onClick={() => agregarCarrito(product)}
                                    className="rounded-md ml-5 bg-amber-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {product.ingredientes.map((ingrediente) =>
                                    <span key={ingrediente} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ingrediente}</span>)}

                            </div>
                        </div>



                    ))}
                </div>
            </div >

        </>
    )
}


export default Productos