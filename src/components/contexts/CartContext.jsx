import { createContext, useEffect, useState } from "react";
import { API_KEY, API_URL } from "../pages/utilities/Constants";

const CartContext = createContext({});

export function CartContextProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	function getItemQuantity(product) {
		return cartItems?.find((item) => item.id === product.id)?.quantity || 0;
	}

	const cartTotalQuantity = cartItems
		? cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
		: 0;

	function increaseCartQuantity(product) {
		console.log(cartItems);
	}

	function decreaseCartQuantity(product) {}

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				cartItems,
				setCartItems,
				cartTotalQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
