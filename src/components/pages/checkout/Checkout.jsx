import React, { useState } from "react";
import { YMaps, Map, Placemark, SearchControl } from "@pbe/react-yandex-maps";
import Center from "../Layout/Center";

const CheckoutPage = () => {
	const [formData, setFormData] = useState({
		city: "",
		street: "",
		home: "",
		homeNumber: "",
		comment: "",
	});

	const [paymentType, setPaymentType] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleInputChange = (field, value) => {
		setFormData({ ...formData, [field]: value });
	};

	const handlePaymentTypeChange = (type) => {
		setPaymentType(type);
	};

	const handlePhoneNumberChange = (number) => {
		setPhoneNumber(number);
	};

	const handleSubmit = () => {
		// Handle submission logic here
		console.log("Form Data:", formData);
		console.log("Payment Type:", paymentType);
		console.log("Phone Number:", phoneNumber);
		// Add further logic for form submission
	};

	return (
		<Center>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				{/* 1st Div - Address and Map */}
				<div style={{ width: "50%", paddingRight: "20px" }}>
					<h2>Delivery Address</h2>
					<form>
						<label>City:</label>
						<input
							type="text"
							value={formData.city}
							onChange={(e) => handleInputChange("city", e.target.value)}
						/>
						<label>Street:</label>
						<input
							type="text"
							value={formData.street}
							onChange={(e) => handleInputChange("street", e.target.value)}
						/>
						<label>Home:</label>
						<input
							type="text"
							value={formData.home}
							onChange={(e) => handleInputChange("home", e.target.value)}
						/>
						<label>Home Number:</label>
						<input
							type="text"
							value={formData.homeNumber}
							onChange={(e) => handleInputChange("homeNumber", e.target.value)}
						/>
						<label>Comment:</label>
						<textarea
							value={formData.comment}
							onChange={(e) => handleInputChange("comment", e.target.value)}
						/>
						{/* Yandex Map */}
						<YMaps>
							<Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}>
								<Placemark geometry={[55.751574, 37.573856]} />
							</Map>
						</YMaps>
					</form>
				</div>
				{/* 2nd Div - Payment and Phone Number */}
				<div style={{ width: "50%" }}>
					<h2>Payment Information</h2>
					<form>
						<label>Payment Type:</label>
						<select onChange={(e) => handlePaymentTypeChange(e.target.value)}>
							<option value="">Select Payment Type</option>
							<option value="click">Click</option>
							<option value="cash">Cash</option>
							<option value="online">Online</option>
						</select>
						<label>Phone Number:</label>
						<input
							type="text"
							value={phoneNumber}
							onChange={(e) => handlePhoneNumberChange(e.target.value)}
						/>
						<button type="button" onClick={handleSubmit}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</Center>
	);
};

export default CheckoutPage;
