import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../pages/utilities/Constants";

const CartContext = createContext({});

export function CartContextProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		// const localData = localStorage.getItem("cartItems");
		// console.log("localData: ", localData);
		// if (localData) {
		// 	try {
		// 		const parsedData = JSON.parse(localData);
		// 		setCartItems(parsedData);
		// 	} catch (error) {
		// 		console.error("Error parsing JSON data: ", error);
		// 		// setCartItems([]);
		// 	}
		// } else {
		axios
			.get(`${API_URL}/cart`, {
				headers: {
					"api-key": API_KEY,
				},
			})
			.then((response) => {
				console.log("response: ", response.data.cart_objects);
				setCartItems(response.data.cart_objects);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setCartItems([]);
			});
	}, []);

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	const cartTotalQuantity = cartItems ? cartItems.length : 0;

	return (
		<CartContext.Provider
			value={{
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
