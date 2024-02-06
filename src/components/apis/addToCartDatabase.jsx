import { API_KEY, API_URL } from "../pages/utilities/Constants";

export function addToCartDatabase(item) {
	const fullUrl = `${API_URL}/cart/add_to_cart/`;
	const requestBody = {
		item_id: item.item_id ? item.item_id : item.id,
		quantity: 1,
	};

	fetch(fullUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": API_KEY,
		},
		body: JSON.stringify(requestBody),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`API request failed with status ${response.status}`);
			}
			return response.json();
		})
		.then((responseData) => {
			console.log("Data added to the db: ", responseData);
			// Handle successful response, e.g., display a success message
		})
		.catch((error) => {
			// Handle errors gracefully, e.g., display an error message
			console.error("Error adding product to cart:", error);
		});
}
