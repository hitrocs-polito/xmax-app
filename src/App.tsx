import Home from "./components/pages/Home"
import Cart from "./components/pages/Cart"
import Liked from "./components/pages/Liked"
import Navbar from "./components/Navbar"
import ProductDetail from "./components/pages/ProductDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import { CartContextProvider } from "./components/CartContext"
import { LikedContextProvider } from "./components/FavouriteContext"



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
