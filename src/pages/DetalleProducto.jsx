import { useState, useContext } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'
import Header from '../components/Header'


const DetalleProducto = props => {
    const { total, setTotal, productos, carro, setCarro } = useContext(MyContext)
    const { id } = useParams();
    const product = productos.find(producto => Number(producto.id) === Number(id))
    console.log(productos)
    console.log(product)

    const agregarCarrito = (id, price) => {
        setTotal(Number(total) + Number(price))
        carro.push(id)
        setCarro(carro)
    }


    return (
        <>
            <Header />
            <div className="bg-white">
                <div className="pt-0">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                            <li >
                                <div className="flex items-center">
                                    <Link to='/' className="mr-2 text-sm font-medium text-gray-900">
                                        Pizzas
                                    </Link>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li className="text-sm">
                                <p className="font-medium text-gray-500">
                                    {product.name}
                                </p>
                            </li>
                        </ol>
                    </nav>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>


                            {/* Reviews */}
                            <div className="mt-6">
                                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-3xl tracking-tight text-gray-900">$ {new Intl.NumberFormat('es-CL').format(product.price)}</p>
                            </div>
                            <div className="mt-10">
                                <button
                                    onClick={() => agregarCarrito(product.id, product.price)}
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>

                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Ingredientes</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.ingredientes.map((ingrediente) => (
                                            <li key={ingrediente} className="text-gray-400">
                                                <span className="text-gray-600">{ingrediente}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default DetalleProducto