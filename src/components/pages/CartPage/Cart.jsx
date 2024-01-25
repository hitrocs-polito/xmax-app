import React, { useContext, useEffect, useState } from "react";
import Center from "../Layout/Center";
import EmptyCart from "../../icons/EmptyCart";
import styled from "styled-components";
import CartContext from "../../contexts/CartContext";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";
import CartProductContainer from "./CartProductContainer";
import EmptyCartPage from "./EmptyCartPage";
import { Link } from "react-router-dom";
import { API_KEY, API_URL } from "../utilities/Constants";

function Cart() {
	const { cartItems, setCartItems } = useContext(CartContext);
	const [loading, setLoading] = useState(true);
	// const totalQty = cartContext.cartItems.reduce((total, cartItem) => {
	// 	return total + cartItem.price * cartItem.quantity;
	// }, 0);

	useEffect(() => {
		const apiUrl = `${API_URL}/cart/`;

		fetch(apiUrl, {
			headers: {
				"api-key": API_KEY,
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Cart items from db: ", data);

				setCartItems(data); // update phoneDatabase state with fetched data
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	console.log("Cart from context: ", cartItems);

	return (
		<Center>
			{cartItems?.length === 0 ? (
				<CartContainer>
					<EmptyCart width="350px" height="250px" />
					<Title>Корзина пуста</Title>
					<SubTitle>Но это никогда не поздно исправить :)</SubTitle>

					<Link to={"/"}>
						<StyledButton>В каталог товаров</StyledButton>
					</Link>
				</CartContainer>
			) : (
				<div>
					<StyledTitle>Корзина</StyledTitle>

					<StyledContainer>
						<ProductsGrid>
							{cartItems?.map((item) => (
								<CartProductContainer key={item.id} {...item} />
							))}
						</ProductsGrid>
						<TotalPriceContainer>
							<TotalDescription>
								<SummaryText>ИТОГО:</SummaryText>
								<TotalPrice>
									{Math.round(50000).toLocaleString("en-US").replace(/,/g, " ")}{" "}
									сум
								</TotalPrice>
							</TotalDescription>
							<SubmitButtonText href="/cart">
								Перейти к оформлению
							</SubmitButtonText>
						</TotalPriceContainer>
					</StyledContainer>
				</div>
			)}
		</Center>
	);
}

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 61px auto 127px;
`;

const Title = styled.h1`
	color: #101010;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-family: "Montserrat";
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 30px 0 0;

	@media (max-width: 1100px) {
		font-size: 25px;
	}

	@media (max-width: 800px) {
		color: #101010;
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

const SubTitle = styled.p`
	color: #838383;
	font-family: "Montserrat";
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 1100px) {
		font-family: Montserrat;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	@media (max-width: 600px) {
		font-size: 16px;
	}
`;

const StyledButton = styled.button`
	cursor: pointer;
	border: 0;
	width: 540px;
	height: 65px;
	flex-shrink: 0;
	border-radius: 20px;
	background: #101010;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
	text-decoration: none;
	color: #fff;
	text-align: center;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;

	/* @media (max-width: 1100px) {
    width: 440px;
    height: 65px;
  } */

	@media (max-width: 600px) {
		width: 350px;
		height: 65px;
	}
`;

const StyledLink = styled.button`
	text-decoration: none;
	color: #fff;
	text-align: center;
	font-family: Montserrat;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const StyledTitle = styled.h2`
	font-size: 1.5rem;
	margin: 20px 0 20px 0;
	font-family: "Montserrat";
`;

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const TotalPriceContainer = styled.div`
	margin: 0 0 0 auto;
	width: 348.98px;
	height: 114px;
	flex-shrink: 0;
	border-radius: 30px;
	background: #fff;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 962px) {
		width: 250px;
	}

	@media screen and (max-width: 780px) {
		width: 230px;
	}

	@media screen and (max-width: 600px) {
		margin: 0;
		width: 330px;
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
		width: 300px;
	}
`;

const TotalDescription = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 22px;
`;

const SummaryText = styled.h4`
	color: #000;
	font-family: "Montserrat";
	font-size: 15px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const TotalPrice = styled.p`
	color: #000;
	font-family: "Montserrat";
	font-size: 15px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const SubmitButtonText = styled.a`
	/* width: 348.98px;
  height: 65px; */
	padding: 24px 0;
	/* flex-shrink: 0; */
	border-radius: 20px;
	background: #101010;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
	border: 0;
	cursor: pointer;
	color: #fff;
	text-align: center;
	font-family: "Montserrat";
	font-size: 17px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	text-decoration: none;

	@media screen and (min-width: 600px) {
		font-size: 15px;
	}
`;

const ProductsGrid = styled.div`
	/* margin: 10[px]; */
`;

export default Cart;
