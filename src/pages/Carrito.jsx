import { useState, useContext } from 'react'

import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'


const Carrito = props => {

    const { total, setTotal, carro, setCarro, setOrderProducts, setTotalOrder } = useContext(MyContext)

    const navigate = useNavigate();

    function quitarItemCarro(obj) {
        setCarro(carro.filter(item => item.id !== obj.id))
        setTotal(Number(total) - (Number(obj.qty) * Number(obj.price)))
    }
    function restarUnidadItemCarro(obj) {
        const indice = carro.findIndex(item => item.id === obj.id);
        if (carro[indice].qty > 1) {
            setTotal(Number(total) - Number(obj.price))
            carro[indice].qty = Number(obj.qty) - 1
            console.log('carro antes de eliminar', carro)
            setCarro([...carro])
        }
    }
    function sumarUnidadItemCarro(obj) {
        const indice = carro.findIndex(item => item.id === obj.id);
        setTotal(Number(total) + Number(obj.price))
        carro[indice].qty = Number(obj.qty) + 1
        console.log('carro antes de eliminar', carro)
        setCarro([...carro])
    }
    function handleCheckout() {
        setOrderProducts([...carro])
        setTotalOrder(total)
        setCarro([])
        setTotal(0)
        navigate(`/checkout`);
    }

    return (
        <>
            <Header />
            <div className="bg-white">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                        <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
                    </div>
                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {carro.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={product.name}>{product.name}</a>
                                                    </h3>
                                                    <p className="ml-4">$ {new Intl.NumberFormat('es-CL').format(Number(product.qty) * Number(product.price))}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500"></p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500"><i className="fa-solid fa-minus" onClick={() => restarUnidadItemCarro(product)}></i> {product.qty} <i className="fa-solid fa-plus" onClick={() => sumarUnidadItemCarro(product)}></i> </p>

                                                <div className="flex">
                                                    <button onClick={() => quitarItemCarro(product)}
                                                        type="button"
                                                        className="font-medium text-amber-700 hover:text-amber-500"
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex flex-1 items-end justify-center text-sm">
                        {(total > 0) && <button
                            onClick={() => handleCheckout()}
                            className="flex items-center justify-center rounded-md border border-transparent bg-amber-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-500"
                        >
                            Checkout
                        </button>}

                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>

                            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">Continuar Comprando</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito
