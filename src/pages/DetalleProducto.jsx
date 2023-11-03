import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'
import Header from '../components/Header'


const DetalleProducto = props => {
    const { total, setTotal, productos, carro, setCarro } = useContext(MyContext)
    const { id } = useParams();
    const product = productos.find(producto => Number(producto.id) === Number(id))
    console.log(productos)
    console.log(product)

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


    return (
        <>
            <Header />
            <div className="bg-white">
                <div className="pt-0">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li >
                                <Link to='/' className="mr-2 text-sm font-medium text-gray-900">
                                    <i className="fa-solid fa-house"> </i> Volver
                                </Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-5">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Informacion de producto</h2>
                            <div className="mt-6">
                                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-3xl tracking-tight text-gray-900">$ {new Intl.NumberFormat('es-CL').format(product.price)}</p>
                            </div>
                            <div className="mt-5">
                                <button
                                    onClick={() => agregarCarrito(product)}
                                    className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            <div>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-sm font-medium text-gray-900">Ingredientes</h3>
                                <div className="mt-2">
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