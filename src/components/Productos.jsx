import React from 'react'
import { Link } from "react-router-dom";
import DetalleProducto from '../pages/DetalleProducto';
import { MyContext } from './context/MyContext'
import { useContext } from 'react';


const Productos = props => {
    const { total, setTotal } = useContext(MyContext)
    const products = [
        {
            id: 1,
            name: 'Margarita',
            href: '#',
            price: '4990',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '3500',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '8900',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '3500',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        }, {
            id: 5,
            name: 'Earthen Bottle',
            href: '#',
            price: '4800',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 6,
            name: 'Nomad Tumbler',
            href: '#',
            price: '3500',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 7,
            name: 'Focus Paper Refill',
            href: '#',
            price: '8900',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        {
            id: 8,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '3500',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            ingredientes: ['Tomate', 'Carne', 'Cebolla', 'Lechuga'],
        },
        // More products...
    ]
    return (
        <>

            <div className="mx-auto max-w-2xl px-4 py-1 sm:px-0  lg:max-w-7xl lg:px-8 pb-10 pt-0">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (

                        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">

                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Link to="/DetalleProducto">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </Link>
                            </div>
                            <div className="px-6 py-4">
                                <Link to="/DetalleProducto">
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
                                    <p className="mt-1 text-lg font-medium text-gray-900 pt-5 pb-5">$ {product.price}</p>
                                </Link>
                                <Link to="/DetalleProducto"
                                    onClick={() => { setTotal(Number(total) + Number(product.price)) }}
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Agregar al carro
                                </Link>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {product.ingredientes.map((ingrediente) =>
                                    <span key={ingrediente} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ingrediente}</span>)}

                            </div>
                        </div>



                    ))}
                </div>
            </div>

        </>
    )
}


export default Productos