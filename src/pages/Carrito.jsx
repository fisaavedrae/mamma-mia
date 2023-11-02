import { useState, useContext } from 'react'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'


const Carrito = props => {


    const { total, setTotal, carro, setCarro, setOrderProducts, setTotalOrder, open, setOpen } = useContext(MyContext)

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
        else {
            quitarItemCarro(obj)
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
        setOpen(false)
        navigate(`/checkout`);
    }

    return (
        <>


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Detalle carrito</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {carro.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-15 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
                                                                                    <p >{product.name}</p>
                                                                                </h3>
                                                                                <p className="ml-4">$ {new Intl.NumberFormat('es-CL').format(Number(product.qty) * Number(product.price))}</p>

                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500"></p>
                                                                        </div>
                                                                        {(product.qty > 1) &&
                                                                            <div>
                                                                                <div className="flex justify-between ">
                                                                                    <h3>

                                                                                    </h3>
                                                                                    <p className="ml-6 font-light text-sm text-gray-400"> c/u $ {new Intl.NumberFormat('es-CL').format(Number(product.price))}</p>

                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500"></p>
                                                                            </div>}
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500"> <b>Cantidad:</b>
                                                                                <button
                                                                                    onClick={() => restarUnidadItemCarro(product)}
                                                                                    className="rounded-md bg-amber-600 px-1 py-1 mr-2 ml-1 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                                >
                                                                                    <i className="fa-solid fa-minus" ></i>
                                                                                </button>
                                                                                <b>{product.qty}</b>
                                                                                <button
                                                                                    onClick={() => sumarUnidadItemCarro(product)}
                                                                                    className="rounded-md bg-amber-600 px-1 py-1 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                                >
                                                                                    <i className="fa-solid fa-plus"></i>
                                                                                </button>
                                                                            </p>

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
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Total</p>
                                                    <p>$ {new Intl.NumberFormat('es-CL').format(total)}</p>
                                                </div>

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

                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continuar Comprando
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default Carrito
