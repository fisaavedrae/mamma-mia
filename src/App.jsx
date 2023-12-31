import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyContext } from './components/context/MyContext'
import './App.css'
import DetalleProducto from './pages/DetalleProducto'
import HomePage from './pages/HomePage'
import Carrito from './pages/Carrito'
import ReadAPI from './components/ReadAPI'
import Checkout from './pages/Checkout'



function App() {
  const [total, setTotal] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
  const [productos, setProductos] = useState([])
  const [carro, setCarro] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [open, setOpen] = useState(false)

  return (
    <>
      <MyContext.Provider value={{ total, setTotal, productos, setProductos, carro, setCarro, orderProducts, setOrderProducts, totalOrder, setTotalOrder, open, setOpen }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza/:id" element={<DetalleProducto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <ReadAPI />
      </MyContext.Provider>
    </>
  )
}

export default App
