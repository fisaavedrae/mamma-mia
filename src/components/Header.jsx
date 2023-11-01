import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MyContext } from './context/MyContext'
import Logo from '../assets/Mamma-Mia.png'


const Header = props => {
    const { total } = useContext(MyContext)
    return (
        <>
            <header className=" mt-0 bg-current mb-5">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mamma mia</span>
                            <img className="logo w-auto" src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="py-6">
                        <Link to="/Carrito" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            <i className="fa-solid fa-cart-shopping"></i> ${new Intl.NumberFormat('es-CL').format(total)}
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Header