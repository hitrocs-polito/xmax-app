import { API_KEY, API_URL } from "../pages/utilities/Constants";

export function decreaseFromCartDatabase(item) {
	console.log("item in decreaseFromCartDatabase: ", item);
	const requestBody = {
		item_id: item.item_id ? item.item_id : item.id,
		quantity: 1,
	};
	fetch(`${API_URL}/cart/remove_from_cart/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"api-key": API_KEY, // Assuming API key authentication
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
			console.log("Data decreased product qty from db: ", responseData);
			// Handle successful response, e.g., display a success message
		})
		.catch((error) => {
			// Handle errors gracefully, e.g., display an error message
			console.error("Error decreasing product qty in cart:", error);
		});
}
