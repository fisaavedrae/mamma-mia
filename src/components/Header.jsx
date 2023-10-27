import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MyContext } from './context/MyContext'


const Header = props => {
    const { total } = useContext(MyContext)
    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mamma mia</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </Link>
                    </div>
                    <div className="py-6">

                        <Link to="/Carrito" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"           >
                            <i className="fa-solid fa-cart-shopping"></i> {total}
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Header