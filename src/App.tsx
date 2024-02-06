import Home from "./components/pages/HomePage/Home";
// import Cart from "./components/pages/CartPage/Cart";
import NewCart from "./components/pages/CartPage/NewCart";
import Liked from "./components/pages/LikedPage/Liked";
import ProductDetail from "./components/pages/productDetailPage/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout/Layout";
import "./App.css";
// import Checkout from "./components/pages/checkout/Checkout";
import { SkeletonTheme } from "react-loading-skeleton";
import NotFoundPage from "./components/pages/Error404/ErrorPage";
import CheckoutSection from "./components/pages/CartPage/CheckoutSection";
// import ProductPage from "./components/pages/productDetailPage/ProductPage";

function App() {
	return (
		<SkeletonTheme baseColor="#202020" highlightColor="#444">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<NewCart />} />
						<Route path="/liked" element={<Liked />} />
						<Route path="/checkout" element={<CheckoutSection />} />
						<Route path="/products/:id" element={<ProductDetail />} />

						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</SkeletonTheme>
	);
}

export default App;
