import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import CartContext, { CartContextProvider } from "../../contexts/CartContext";
import LikedContext from "../../contexts/LikedContext";
import { Link } from "react-router-dom";

function ProductCard(product) {
	const likedContext = useContext(LikedContext);
	const cartContext = useContext(CartContext);
	const cartQuantity = cartContext.getItemQuantity(product);

	const [quantity, setQuantity] = useState(0);
	const { id, name, price, images } = product;
	// const { addProduct, removeProduct } = useContext(CartContext);
	const [isHeartActive, setIsHeartActive] = useState(false); // State for heart active state

	const likedProducts = JSON.parse(localStorage.getItem("likedProducts"));

	const handleHeartClick = () => {
		const newIsHeartActive = !isHeartActive;
		setIsHeartActive(newIsHeartActive);

		if (newIsHeartActive) {
			likedContext.addToLiked(product);
		} else {
			likedContext.removeFromLiked(product);
		}
	};

	const handleIncreaseCartQuantity = (item) => {
		cartContext.setCartItems((currItems) => {
			if (!currItems.some((item) => item.id === product.id)) {
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

		const fullUrl = `${API_URL}/cart/add_to_cart/${product.id}/`;

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
		cartContext.setCartItems((currItems) => {
			if (currItems.find((item) => item.id === product.id)?.quantity == 1) {
				return currItems.filter((item) => item.id !== product.id);
			} else {
				return currItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity - 1 };
					} else return item;
				});
			}
		});

		fetch(`${API_URL}/cart/remove_from_cart/${product.id}/`, {
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

	return (
		<Card>
			<WhiteBox>
				<StyledHeart
					size="2x"
					icon={faHeart} // Use the heart icon from Font Awesome
					className={likedContext.isLiked(product) ? "active" : "noactive"}
					onClick={() => handleHeartClick(product)}
				/>
				<StyledLink to={`/products/${id}`}>
					{product && product.images && product.images[0] && (
						<Image src={product.images[0].filename} alt="product-image"></Image>
					)}
				</StyledLink>
			</WhiteBox>
			<DescStyle>
				<StyledLink to={`/products/${id}`}>
					<Title>{name}</Title>
				</StyledLink>
				<PriceRow>
					<Price>
						{Math.round(price).toLocaleString("en-US").replace(/,/g, " ")} сум
					</Price>
					<CartContainer>
						{cartQuantity === 0 ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								onClick={() => handleIncreaseCartQuantity(product)}
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="orange"
								width={"2rem"}
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</svg>
						) : (
							<QuantityControl>
								<QuantityButton
									onClick={() => handleDecreaseCartQuantity(product)}
								>
									<MinusIcon />
								</QuantityButton>
								<QuantityStyle>
									{cartContext.getItemQuantity(product)}
								</QuantityStyle>
								<QuantityButton
									onClick={() => handleIncreaseCartQuantity(product)}
								>
									<PlusIcon />
								</QuantityButton>
							</QuantityControl>
						)}
					</CartContainer>
				</PriceRow>
			</DescStyle>
		</Card>
	);
}

const StyledHeart = styled(FontAwesomeIcon)`
	position: absolute;
	top: 15px;
	right: 15px;
	/* color: #ccc; */
	cursor: pointer;
	user-select: none;
	width: 2rem;
	z-index: 4;

	&:hover,
	&.active {
		color: red;
		user-select: none;
	}

	&.noactive {
		color: #ccc;
	}
`;

const Card = styled.div`
	position: relative;
	border-radius: 15px;
	transition: box-shadow 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	height: max-content;

	img {
		/* max-width: 100%; */
		max-height: 100%;
	}

	&:hover {
		-webkit-box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
		transition: box-shadow 0.3s ease-in-out;
	}

	@media (max-width: 480px) {
		img {
			/* height: auto;  */
		}

		Title {
			font-size: 22px;
		}
	}
`;

const Image = styled.img`
	position: relative;
	z-index: 0;
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

const WhiteBox = styled.div`
	background-color: white;
	padding: 20px;
	height: 280px;
	width: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	border-radius: 15px;

	img {
		max-width: 300px;
		max-height: 400px;
	}

	@media (max-width: 1100px) {
		height: 250px;
	}

	@media (max-width: 800px) {
		height: 250px;
	}

	@media (max-width: 600px) {
		height: 300px;
	}
`;

const Title = styled.h2`
	font-weight: normal;
	font-size: 1rem;
	margin: 0;
`;

const DescStyle = styled.div`
	margin-top: 10px;
	padding: 10px;
`;

const PriceRow = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const Price = styled.div`
	font-size: 1rem;
	font-weight: bold;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import Liked from "../LikedPage/Liked";
import { API_KEY, API_URL } from "../utilities/Constants";

const CartContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	position: absolute;
	right: 0;
	user-select: none;
`;

const QuantityControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const QuantityButton = styled.button`
	background-color: #eaeaea;
	border: none;
	margin: 0 2px;
	cursor: pointer;
`;

const QuantityStyle = styled.div`
	width: 1rem;
	text-align: center;
`;

export default ProductCard;
