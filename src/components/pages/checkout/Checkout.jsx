import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map, Placemark, SearchControl } from "@pbe/react-yandex-maps";

const CheckoutPage = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const [mapCenter, setMapCenter] = useState([0, 0]);
	const [selectedAddress, setSelectedAddress] = useState("");

	const [userInfo, setUserInfo] = useState({
		name: "",
		phone: "",
		address: "",
	});

	useEffect(() => {
		// Use geocoding or other methods to get the actual coordinates based on the user's address
		// For this example, we'll use a default center
		setMapCenter([40.7833333333, 72.3316666667]);
	}, []);

	const handleAddressSelect = (event) => {
		console.log("Checkout page is working!");

		const selectedCoords = event.get("coords");
		// Use reverse geocoding or other methods to get the address based on the selected coordinates
		// For this example, we'll just set the selected address as a string
		setSelectedAddress(`${selectedCoords.join(", ")}`);
		handleInputChange("address", selectedAddress);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserInfo((prevUserInfo) => ({
			...prevUserInfo,
			[name]: value,
		}));
	};

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	const handleRemoveFromCart = (productId) => {
		dispatch(removeFromCart({ id: productId }));
	};

	const calculateTotal = () => {
		return cart.cartItems.reduce(
			(total, item) => total + item.price * item.cartQuantity,
			0
		);
	};

	const handleCheckout = () => {
		// Add logic to handle the checkout process, e.g., send data to the server
		console.log("User Info:", userInfo);
		console.log("Cart Items:", cart.cartItems);
	};

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<CheckoutTitle>Checkout</CheckoutTitle>
			</CheckoutHeader>
			<UserInfoForm>
				<FormLabel>Name:</FormLabel>
				<FormInput
					type="text"
					name="name"
					value={userInfo.name}
					onChange={handleInputChange}
				/>

				<FormLabel>Phone:</FormLabel>
				<FormInput
					type="tel"
					name="phone"
					value={userInfo.phone}
					onChange={handleInputChange}
				/>

				<FormLabel>Address:</FormLabel>
				<FormInput
					type="text"
					name="address"
					value={userInfo.address}
					onChange={handleInputChange}
				/>
			</UserInfoForm>

			<MapContainer>
				<YMaps>
					<Map
						defaultState={{ center: mapCenter, zoom: 12 }}
						width="100%"
						height="300px"
						onClick={handleAddressSelect}
					>
						<Placemark geometry={mapCenter} />
						<SearchControl options={{ float: "right" }} />
					</Map>
				</YMaps>
				<SelectedAddress>{selectedAddress}</SelectedAddress>
			</MapContainer>

			{/* <CheckoutItems>
				{cart.cartItems.map((item) => (
					<CartItem key={item.id}>
						<CartItemDetails>
							<CartItemTitle>{item.title}</CartItemTitle>
							<CartItemQuantity>x {item.cartQuantity}</CartItemQuantity>
						</CartItemDetails>
						<CartItemPrice>{item.price * item.cartQuantity} $</CartItemPrice>
						<RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
							Remove
						</RemoveButton>
					</CartItem>
				))}
			</CheckoutItems> */}

			{/* <CheckoutTotal>
				<TotalLabel>Total:</TotalLabel>
				<TotalAmount>{calculateTotal()} $</TotalAmount>
			</CheckoutTotal> */}

			<CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
		</CheckoutContainer>
	);
};

const MapContainer = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const SelectedAddress = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 10px;
	background-color: #fff;
`;

const CheckoutContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
`;

const CheckoutHeader = styled.div`
	text-align: center;
	margin-bottom: 20px;
`;

const CheckoutTitle = styled.h2`
	font-size: 1.5rem;
`;

const UserInfoForm = styled.div`
	margin-bottom: 20px;
`;

const FormLabel = styled.label`
	display: block;
	margin-bottom: 5px;
`;

const FormInput = styled.input`
	width: 100%;
	padding: 8px;
	margin-bottom: 10px;
`;

const CheckoutItems = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const CartItem = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	border-bottom: 1px solid #ddd;

	&:last-child {
		border-bottom: none;
	}
`;

const CartItemDetails = styled.div`
	flex: 2;
`;

const CartItemTitle = styled.div`
	font-size: 1.2rem;
	margin-bottom: 5px;
`;

const CartItemQuantity = styled.div`
	color: #888;
	font-size: 0.9rem;
`;

const CartItemPrice = styled.div`
	flex: 1;
	text-align: right;
`;

const RemoveButton = styled.button`
	background-color: #fff;
	color: #e74c3c;
	border: 1px solid #e74c3c;
	padding: 5px 10px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e74c3c;
		color: #fff;
	}
`;

const CheckoutTotal = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.2rem;
`;

const TotalLabel = styled.div`
	font-weight: bold;
`;

const TotalAmount = styled.div``;

const CheckoutButton = styled.button`
	width: 100%;
	background-color: #2ecc71;
	color: #fff;
	border: none;
	padding: 10px;
	cursor: pointer;
	font-size: 1.2rem;
	border-radius: 8px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #27ae60;
	}
`;

export default CheckoutPage;
