import Home from "./components/pages/HomePage/Home"
import Cart from "./components/pages/CartPage/Cart"
import Liked from "./components/pages/LikedPage/Liked"
import Navbar from "./components/pages/Layout/Navbar"
import ProductDetail from "./components/pages/productDetailPage/ProductDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/pages/Layout/Footer"
import { CartContextProvider } from "./components/contexts/CartContext"
import { LikedContextProvider } from "./components/contexts/FavouriteContext"



function App() {
  return (
    <div>
      <LikedContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/liked' element={<Liked />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
      </LikedContextProvider>
    </div>
  )
}

export default App
