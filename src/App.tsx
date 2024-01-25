import Home from "./components/pages/HomePage/Home";
import Cart from "./components/pages/CartPage/Cart";
import Liked from "./components/pages/LikedPage/Liked";
import ProductDetail from "./components/pages/productDetailPage/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout/Layout";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./components/contexts/CartContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/liked" element={<Liked />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/products/:id" element={<ProductDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
