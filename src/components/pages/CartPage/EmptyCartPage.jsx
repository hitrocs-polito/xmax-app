import React from "react";
import Center from "../Layout/Center";
import styled from "styled-components";
import EmptyCart from "../../icons/EmptyCart";
import { Link } from "react-router-dom";

function EmptyCartPage() {
	return (
		<CartContainer>
			<CartImage>
				<EmptyCart />
			</CartImage>
			<Title>Корзина пуста</Title>
			<SubTitle>Но это никогда не поздно исправить :)</SubTitle>

			<Link to={"/"}>
				<StyledButton>В каталог товаров</StyledButton>
			</Link>
		</CartContainer>
	);
}

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CartImage = styled.div`
	/* width: 100px; */
	/* @media screen and (max-width: 350px) {
		width: 300px;
	} */
	/* width: 300px; */
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

	@media (max-width: 568px) {
		font-size: 1rem;
	}
`;

const SubTitle = styled.p`
	color: #838383;
	font-family: "Montserrat";
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 568px) {
		font-size: 0.7rem;
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

	@media (max-width: 568px) {
		width: 300px;
		height: 50px;
		font-size: 0.9rem;
	}
`;
export default EmptyCartPage;
