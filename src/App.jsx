import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Productos from './components/Productos'
import DetalleProducto from './pages/DetalleProducto'
import HomePage from './pages/HomePage'
import Carrito from './pages/Carrito'
import { MyContext } from './components/context/MyContext'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyContext.Provider value={{ total, setTotal }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetalleProducto" element={<DetalleProducto />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </MyContext.Provider>


    </>
  )
}

export default App
