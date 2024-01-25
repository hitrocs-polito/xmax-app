import React, { createContext, useContext, useEffect, useState } from "react";

// Creating the LikedContext
const LikedContext = createContext();

// Custom hook to use the LikedContext

// LikedContextProvider component
export function LikedContextProvider({ children }) {
	// State to store liked items
	const [likedItems, setLikedItems] = useState(
		JSON.parse(localStorage.getItem("likedItems")) || []
	);

	useEffect(() => {
		localStorage.setItem("likedItems", JSON.stringify(likedItems));
	}, [likedItems]);

	// Function to add an item to the liked list
	const addToLiked = (item) => {
		// Check if the item with the same ID is already in likedItems
		if (likedItems.some((liked) => liked.id === item.id)) {
			// If it exists, remove it
			setLikedItems((prevLikedItems) =>
				prevLikedItems.filter((liked) => liked.id !== item.id)
			);
		} else {
			// If it doesn't exist, add it
			setLikedItems((prevLikedItems) => [...prevLikedItems, item]);
		}

		// Update localStorage after the change
		localStorage.setItem("likedItems", JSON.stringify(likedItems));
	};
	// Function to remove an item from the liked list
	const removeFromLiked = (item) => {
		setLikedItems((prevLikedItems) =>
			prevLikedItems.filter((likedItem) => likedItem.id !== item.id)
		);
	};

	// Check if an item is liked
	const isLiked = (item) => {
		return likedItems.some((likedItem) => likedItem.id === item.id);
	};

	const getLikedItemsLength = () => {
		return likedItems.length;
	};
	// Value to be provided by the context provider
	const contextValue = {
		likedItems,
		addToLiked,
		removeFromLiked,
		isLiked,
		getLikedItemsLength,
	};

	return (
		<LikedContext.Provider value={contextValue}>
			{children}
		</LikedContext.Provider>
	);
}

export default LikedContext;
