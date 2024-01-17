import Home from "./components/pages/HomePage/Home"
import Cart from "./components/pages/CartPage/Cart"
import Liked from "./components/pages/LikedPage/Liked"
import ProductDetail from "./components/pages/productDetailPage/ProductDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./components/contexts/CartContext"
import { LikedContextProvider } from "./components/contexts/FavouriteContext"
import Layout from "./components/pages/Layout/Layout"



function App() {
  
  return (
    <div>
      <LikedContextProvider>
      <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/liked' element={<Liked />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </LikedContextProvider>
    </div>
  )
}

export default App
