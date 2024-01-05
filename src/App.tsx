import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import Cart from "./components/pages/Cart"
import Liked from "./components/pages/Liked"
import Navbar from "./components/Navbar"
import ProductDetail from "./components/pages/ProductDetail"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/liked' element={<Liked />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
