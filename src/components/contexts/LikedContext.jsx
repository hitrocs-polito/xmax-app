import React, { createContext, useContext, useEffect, useState } from "react";
import { API_KEY, API_URL } from "../pages/utilities/Constants";

// Creating the LikedContext
const LikedContext = createContext();

// Custom hook to use the LikedContext

// LikedContextProvider component
export function LikedContextProvider({ children }) {
	// State to store liked items
	const [likedItems, setLikedItems] = useState([]);

	useEffect(() => {
		const localData = localStorage.getItem("likedItems");
		// if (localData) {
		// 	try {
		// 		const parsedData = JSON.parse(localData);
		// 		setCartItems(parsedData);
		// 	} catch (error) {
		// 		console.error("Error parsing JSON data: ", error);
		// 		// setCartItems([]);
		// 	}
		// } else {
		fetch(`${API_URL}/wishlist/`, {
			headers: {
				"api-key": API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("data: ", data.whishlist_item);
				setLikedItems(data.whishlist_item);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setLikedItems([]);
			});
	}, []);

	useEffect(() => {
		localStorage.setItem("likedItems", JSON.stringify(likedItems));
	}, [likedItems]);

	const getLikedItemsLength = () => {
		return likedItems.length;
	};
	// Value to be provided by the context provider
	const contextValue = {
		likedItems,
		setLikedItems,
		getLikedItemsLength,
	};

	return (
		<LikedContext.Provider value={contextValue}>
			{children}
		</LikedContext.Provider>
	);
}

export default LikedContext;
