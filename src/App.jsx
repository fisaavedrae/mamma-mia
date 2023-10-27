import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Productos from './components/Productos'
import DetalleProducto from './pages/DetalleProducto'
import HomePage from './pages/HomePage'
import Carrito from './pages/Carrito'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetalleProducto" element={<DetalleProducto />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>



    </>
  )
}

export default App
