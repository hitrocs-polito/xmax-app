import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import Center from "./Center";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import LikedContext from "../../contexts/LikedContext";
const StyledHeader = styled.header`
	background-color: #eaeaea;
	padding: 1rem 0;
`;

const Logo = styled.a`
	color: #101010;
	text-decoration: none;
	font-family: "Montserrat", sans-serif;
	font-weight: bold;
	font-size: 25px;

	@media screen and (max-width: 600px) {
		font-size: 22px;
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Subwrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledNav = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	@media screen and (max-width: 800px) {
		gap: 5px;
	}
`;

const CartCounter = styled.span`
	background-color: #ffa542;
	color: white;
	border-radius: 5px;
	padding: 1px 5px;
	font-size: 14px;
	min-width: 15px;
	text-align: center;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		position: absolute;
		top: -8px;
		right: -5px;
		border-radius: 50%;
		padding: 0px 6px;
	}
`;

const InputContainer = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	padding-left: 15px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

const InputContainer1 = styled.div`
	display: none;
	height: 40px;
	align-items: center;
	justify-content: center;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	padding-left: 15px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);

	@media screen and (max-width: 800px) {
		display: flex;
	}
`;

const Input = styled.input`
	width: 250px;
	height: 100%;
	border: none;
	outline: none;
	font-size: 0.9em;
	caret-color: orange;
	font-family: "Montserrat", sans-serif;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

const Labelforsearch = styled.label`
	cursor: pointer;
	padding: 20px 20px;
	background-color: #eee;
`;

const Svg = styled.svg`
	cursor: pointer;
	margin: 7px 0 0;
	fill: rgb(114, 114, 114);
`;

const StyledNavLink = styled.a`
	text-decoration: none;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #727272;
	font-weight: 500;
	padding: 7px 12px;
	border-radius: 10px;
	gap: 5px;
	&:hover {
		background-color: #72727252;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
	}
`;

const StyledSpan = styled.span`
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

function Navbar() {
	const cartContext = useContext(CartContext);
	const likedContext = useContext(LikedContext);
	console.log("navbar page run!");

	return (
		<Center>
			<StyledHeader>
				<Wrapper>
					<Subwrapper>
						<Logo href={"/"}>X-MAX MOBILE</Logo>
						<StyledNav>
							<InputContainer>
								<Input
									type="text"
									name="text"
									id="input"
									placeholder="Qidirish..."
								></Input>

								<Labelforsearch for="input">
									<Svg viewBox="0 0 512 512" class="searchIcon" width={"15px"}>
										<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
									</Svg>
								</Labelforsearch>
							</InputContainer>
							<StyledNavLink href="/liked">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									class="feather feather-heart"
								>
									<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
								</svg>
								<StyledSpan>Sevimlilar</StyledSpan>
								<CartCounter>{likedContext.getLikedItemsLength()}</CartCounter>
							</StyledNavLink>
							<StyledNavLink href="/cart">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#727272"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									class="lucide lucide-shopping-bag"
								>
									<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
									<path d="M3 6h18" />
									<path d="M16 10a4 4 0 0 1-8 0" />
								</svg>
								<StyledSpan>Savat</StyledSpan>
								<CartCounter>{cartContext.cartTotalQuantity}</CartCounter>
							</StyledNavLink>
						</StyledNav>
					</Subwrapper>
					<InputContainer1>
						<Input
							type="text"
							name="text"
							id="input"
							placeholder="Mahsulotlar bo'yicha qidirish"
						></Input>

						<Labelforsearch for="input">
							<a type="button">
								<Svg viewBox="0 0 512 512" class="searchIcon" width={"15px"}>
									<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
								</Svg>
							</a>
						</Labelforsearch>
					</InputContainer1>
				</Wrapper>
			</StyledHeader>
		</Center>
	);
}

export default Navbar;
