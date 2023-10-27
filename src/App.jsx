import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyContext } from './components/context/MyContext'
import './App.css'
import DetalleProducto from './pages/DetalleProducto'
import HomePage from './pages/HomePage'
import Carrito from './pages/Carrito'
import ReadAPI from './components/ReadAPI'



function App() {
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState([])

  return (
    <>
      <MyContext.Provider value={{ total, setTotal, productos, setProductos }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetalleProducto" element={<DetalleProducto />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
        <ReadAPI />
      </MyContext.Provider>


    </>
  )
}

export default App
