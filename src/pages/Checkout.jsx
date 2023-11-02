import { useState, useContext, useId } from 'react'

import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'


const Checkout = props => {
    const { orderProducts, totalOrder } = useContext(MyContext)
    const orderID = uuid.v1()


    return (
        <>
            <Header />
            <div className="bg-white">

                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                        <h1 className="text-lg font-medium text-gray-900">Resumen de Orden ID: {orderID}</h1>

                    </div>

                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {orderProducts.map((product) => (
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
                                                <p className="text-gray-500">Cantidad: {product.qty}</p>

                                                <div className="flex">

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

                    <div className="mt-6 flex justify-center text-center">
                        <h4 className='text-lg  text-gray-900'>
                            Monto total de la orden: <b>$ {new Intl.NumberFormat('es-CL').format(totalOrder)}</b>
                        </h4>
                    </div>
                    <div className="mt-6 flex justify-center text-center">
                        <h1 className='text-lg font-extrabold text-gray-900'>Muchas gracias por su compra</h1>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>

                            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">Volver al Inicio</Link>
                        </p>
                    </div>
                </div>
            </div>



        </>
    )
}



export default Checkout