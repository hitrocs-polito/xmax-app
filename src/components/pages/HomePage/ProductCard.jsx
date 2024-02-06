import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../contexts/CartContext";
import LikedContext from "../../contexts/LikedContext";
import { Link } from "react-router-dom";
import { decreaseFromCartDatabase } from "../../apis/decreaseFromCart";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import Liked from "../LikedPage/Liked";
import { API_KEY, API_URL } from "../utilities/Constants";
import { addToCartDatabase } from "../../apis/addToCartDatabase";

function ProductCard(product) {
	const { cartItems, setCartItems } = useContext(CartContext);

	const { likedItems, setLikedItems } = useContext(LikedContext);
	// const cartQuantity = parseInt(getItemQuantity(product));

	const { id, name, price, images } = product.item ? product.item : product;
	const [isHeartActive, setIsHeartActive] = useState(false); // State for heart active state

	const [quantity, setQuantity] = useState(0);

	const isLiked = (item) => {
		console.log("liked items: ", likedItems);
		return likedItems.some((likedItem) => likedItem.item_id === item.id);
	};

	useEffect(() => {
		console.log("Cart items: ", cartItems);
		cartItems.map((item) => {
			const product_id = item.item_id ? item.item_id : item.id;
			if (product_id === product.id) {
				setQuantity(item.quantity);
			}
		});
		// const foundItem = cartItems.find(
		// 	(item) => (item.item_id ? item.item_id : item.id) === product.id
		// );
		// if (foundItem) {
		// 	setQuantity(foundItem.quantity);
		// }
	}, []);

	console.log("quantity: ", quantity);

	const handleHeartClick = (item) => {
		const newIsHeartActive = !isHeartActive;
		setIsHeartActive(newIsHeartActive);

		if (newIsHeartActive) {
			// Function to add an item to the liked list
			console.log(likedItems);
			if (likedItems.some((liked) => liked.item_id === item.id)) {
				// If it exists, remove it
				setLikedItems((prevLikedItems) =>
					prevLikedItems.filter((liked) => liked.item_id !== item.id)
				);
			} else {
				// If it doesn't exist, add it
				setLikedItems((prevLikedItems) => [...prevLikedItems, item]);
			}
			// Update localStorage after the change
			// localStorage.setItem("likedItems", JSON.stringify(likedItems));
		} else {
			if (Array.isArray(likedItems)) {
				setLikedItems((prevLikedItems) =>
					prevLikedItems.filter((likedItem) => likedItem.item_id !== item.id)
				);
			}
		}

		const fullUrl = `${API_URL}/wishlist/wishlist_toggle/`;
		const requestBody = {
			item_id: item.id,
		};
		fetch(fullUrl, {
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
				console.log("Product added to wishlist:", responseData);
				setLikedItems(responseData);
				// Handle successful response, e.g., display a success message
			})
			.catch((error) => {
				// Handle errors gracefully, e.g., display an error message
				console.error("Error adding product to wishlist:", error);
			});
	};

	const handleIncreaseCartQuantity = (item) => {
		setQuantity(quantity + 1);
		setCartItems((currItems) => {
			if (!currItems.some((product) => item.id === product.id)) {
				// Product is not in the cart, add it as a new product
				return [...currItems, { ...item, quantity: 1 }];
			} else {
				// Product is already in the cart, update the quantity
				return currItems.map((product) => {
					if (product.id === item.id) {
						return { ...product, quantity: product.quantity + 1 };
					}
				});
			}
		});

		console.log("cart items after increasing: ", cartItems);

		addToCartDatabase(item);
	};

	// function getItemQuantity(product) {
	// console.log(
	// 	"response of getItemQty: ",
	// 	cartItems?.find((item) => item?.item_id === product.id)?.quantity || 0
	// );

	// return cartItems.map((item) => {
	// 	item.item_id === product.id ? item.quantity : 0;
	// });

	// const foundItem = cartItems.find((item) => item.item_id === product.id);

	// return foundItem ? foundItem.quantity : 0;

	// return (
	// 	cartItems?.find((item) => item?.item_id === product.id)?.quantity || 0
	// );
	// }

	const handleDecreaseCartQuantity = (item) => {
		setCartItems((currItems) => {
			if (currItems.find((product) => item.id === product.id)?.quantity === 1) {
				return currItems.filter((product) => item.id !== product.id);
			} else {
				return currItems.map((product) => {
					if (product.id === item.id) {
						return { ...product, quantity: product.quantity - 1 };
					} else return product;
				});
			}
		});

		decreaseFromCartDatabase(item);
	};
	const numLines = name.split(/\r\n|\r|\n/).length;
	return (
		<Card>
			<WhiteBox>
				<StyledHeart
					size="2x"
					icon={faHeart} // Use the heart icon from Font Awesome
					className={isLiked(product) ? "active" : "noactive"}
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
					{/* {name.length <= 30 && <Price>{price}</Price>} */}
				</StyledLink>
				<PriceRow>
					<Price>
						{Math.round(price).toLocaleString("en-US").replace(/,/g, " ")} so'm
					</Price>
				</PriceRow>
				<CartContainer>
					{quantity === 0 ? (
						<CartStyle onClick={() => handleIncreaseCartQuantity(product)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="21"
								fill="#010101"
								viewBox="0 0 256 256"
								strokeWidth="2"
							>
								<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
							</svg>
							<CartText>Savatga qo'shish</CartText>
						</CartStyle>
					) : (
						<QuantityControl>
							<QuantityButton
								onClick={() => handleDecreaseCartQuantity(product)}
							>
								<MinusIcon />
							</QuantityButton>
							<QuantityStyle>{quantity}</QuantityStyle>
							<QuantityButton
								onClick={() => handleIncreaseCartQuantity(product)}
							>
								<PlusIcon />
							</QuantityButton>
						</QuantityControl>
					)}
				</CartContainer>
			</DescStyle>
		</Card>
	);
}

const CartText = styled.span`
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 1rem;

	@media screen and (max-width: 600px) {
		font-size: 0.9rem;
	}
	@media screen and (max-width: 400px) {
		font-size: 0.8rem;
	}
`;

const CartStyle = styled.div`
	width: 100%;
	border: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	height: 35px;
`;

const StyledHeart = styled(FontAwesomeIcon)`
	position: absolute;
	top: 15px;
	right: 15px;
	/* color: #ccc; */
	cursor: pointer;
	user-select: none;
	width: 1.5rem;
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
	border-radius: 10px;
	transition: box-shadow 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	height: max-content;
	max-width: 300px;
	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add slight shadow on hover */
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
	max-height: 200px;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

const WhiteBox = styled.div`
	background-color: white;
	padding: 20px;
	height: 250px;
	max-height: 250px;
	max-width: 350px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	border-radius: 10px;
	transition: box-shadow 0.3s ease; /* Add transition for smooth effect */
`;

const Title = styled.h2`
	font-weight: 500;
	font-size: 1rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2; /* Limit to 2 lines */
	overflow: hidden;
	text-overflow: ellipsis;
`;

const DescStyle = styled.div`
	padding: 10px;
`;

const PriceRow = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 20px;
`;

const Price = styled.div`
	font-size: 0.9rem;
	font-weight: 500;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const CartContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
`;

const QuantityControl = styled.div`
	border: 2px solid black;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	height: 35px;
`;

const QuantityButton = styled.button`
	border: none;
	border-radius: 5px;
	cursor: pointer;
	height: 100%;
	overflow: hidden;
	background-color: #eaeaea;
`;

const QuantityStyle = styled.div`
	width: 1.2rem;
	font-weight: 600;
	text-align: center;
`;

export default ProductCard;
