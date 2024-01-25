import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import DeleteIcon from "../../icons/DeleteIcon";

import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { API_KEY, API_URL } from "../utilities/Constants";

function CartProductContainer(item) {
	const { setCartItems, cartItems } = useContext(CartContext);

	const { images, name, price, id } = item?.item || {};
	const intPrice = parseInt(price);

	const handleIncreaseCartQuantity = (item) => {
		setCartItems((currItems) => {
			if (!currItems.some((product) => item.id === product.id)) {
				// Product is not in the cart, add it as a new product
				return [...currItems, { ...product, quantity: 1 }];
			} else {
				// Product is already in the cart, update the quantity
				return currItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity + 1 };
					}
				});
			}
		});

		const fullUrl = `${API_URL}/cart/add_to_cart/${item.id}/`;

		fetch(fullUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"api-key": API_KEY, // Assuming API key authentication
			},
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
	};

	const handleDecreaseCartQuantity = (item) => {
		setCartItems((currItems) => {
			if (currItems.find((product) => item.id === product.id)?.quantity == 1) {
				return currItems.filter((product) => item.id !== product.id);
			} else {
				return currItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity - 1 };
					} else return item;
				});
			}
		});

		fetch(`${API_URL}/cart/remove_from_cart/${item.id}/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"api-key": API_KEY, // Assuming API key authentication
			},
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
	};

	function removeFromCart(item) {
		setCartItems((currItems) => {
			return currItems.filter((product) => product.id !== item.id);
		});

		console.log(item);

		const fullUrl = `${API_URL}/cart/delete/${item.id}/`;

		fetch(fullUrl, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"api-key": API_KEY, // Assuming API key authentication
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`API request failed with status ${response.status}`);
				}
				return response.json();
			})
			.then((responseData) => {
				console.log("Data removed from the db: ", responseData);
				// Handle successful response, e.g., display a success message
			})
			.catch((error) => {
				// Handle errors gracefully, e.g., display an error message
				console.error("Error removing product from cart:", error);
			});
	}

	return (
		<ProductContainer>
			<FirstColumn>
				<Link to={`/products/${id}`}>
					<Img src={images?.[0]?.filename} alt="product_image" />
				</Link>

				<QuantityControl>
					<QuantityButton onClick={() => handleDecreaseCartQuantity(item)}>
						<MinusIcon />
					</QuantityButton>
					<QuantityStyle>{item.quantity}</QuantityStyle>
					<QuantityButton onClick={() => handleIncreaseCartQuantity(item)}>
						<PlusIcon />
					</QuantityButton>
				</QuantityControl>
			</FirstColumn>
			<SecondColumn>
				<ProductTitle style={{ margin: 0 }}>{name}</ProductTitle>
				<ProductPrice style={{ margin: 0, marginTop: "12px" }}>
					{item.quantity} x{" "}
					{Math.round(intPrice).toLocaleString("en-US").replace(/,/g, " ")}{" "}
				</ProductPrice>
			</SecondColumn>
			<ThirdColumn>
				<a
					style={{ backgroundColor: "null", border: "null", cursor: "pointer" }}
					onClick={() => removeFromCart(item)}
				>
					<DeleteIcon />
				</a>
				<TotalProductPrice>
					{Math.round(intPrice * item.quantity)
						.toLocaleString("en-US")
						.replace(/,/g, " ")}{" "}
					сум
				</TotalProductPrice>
			</ThirdColumn>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	margin: 0 auto 20px 0;
	display: grid;
	grid-template-columns: 1fr 2fr 1.5fr;
	width: 633px;
	height: 218px;
	flex-shrink: 0;
	border-radius: 30px;
	background: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 1286px) {
		width: 550px;
	}

	@media screen and (max-width: 1150px) {
		width: 450px;
	}

	@media screen and (max-width: 1024px) {
		width: 400px;
	}

	@media screen and (max-width: 820px) {
		width: 350px;
		height: 180px;
	}

	@media (max-width: 600px) {
		width: 330px;
		height: 162px;

		.img {
			width: 70px;
			height: 76px;
		}
	}

	@media screen and (max-width: 430px) {
		width: 344px;
	}

	@media screen and (max-width: 400px) {
		width: 320px;
	}

	@media screen and (max-width: 380px) {
		width: 310px;
	}

	@media screen and (max-width: 365px) {
		width: 295px;
	}
`;

const Img = styled.img`
	width: 100%;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	/* object-fit: cover; */

	@media (max-width: 600px) {
		width: 70px;
		height: 76px;
	}
`;

const FirstColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 18px 0 10px 0.6rem;
	margin-right: 2rem;

	@media screen and (max-width: 600px) {
		padding: 15px 0;
		margin-right: 0.8rem;
	}
`;

const SecondColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding: 50px 0;
	/* margin-right: 220px; */

	@media screen and (max-width: 1286px) {
		/* margin-right: 100px; */
	}

	@media screen and (max-width: 1150px) {
		/* margin-right: 100px; */
	}

	@media screen and (max-width: 1024px) {
		/* margin-right: 20px; */
	}

	@media screen and (max-width: 600px) {
		padding: 0px 0 30px;
		/* margin-right: 0px; */
	}
`;

const ThirdColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	padding: 18px 0;

	@media screen and (max-width: 1024px) {
		padding-right: 10px;
	}

	@media screen and (max-width: 820px) {
		padding-bottom: 10px;
	}

	@media screen and (max-width: 600px) {
		padding: 10px 0;
	}

	@media screen and (max-width: 400px) {
		padding-right: 15px;
	}

	@media screen and (min-width: 400px) {
		padding-right: 15px;
	}
`;

const ProductTitle = styled.h4`
	color: #1c1c27;
	font-family: "Montserrat";
	font-size: 17px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	@media screen and (max-width: 600px) {
		font-size: 15px;
	}
`;

const ProductPrice = styled.p`
	color: #aaa;
	font-family: "Montserrat";
	font-size: 15px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const TotalProductPrice = styled.p`
	color: #1c1c27;
	text-align: right;
	font-family: Montserrat;
	font-size: 15px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const QuantityControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
`;

const QuantityButton = styled.button`
	background-color: #fff;
	border: none;
	margin: 0 2px;
	cursor: pointer;
`;

const QuantityStyle = styled.div`
	width: 1rem;
	text-align: center;
`;

export default CartProductContainer;
