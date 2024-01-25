import React, { useState, useEffect, useContext } from "react";
import Center from "../Layout/Center";
import CategorySlider from "../HomePage/Slider/CategorySlider";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";
import ProductCard from "../HomePage/ProductCard";
import LikedContext from "../../contexts/LikedContext";

function Liked() {
	const likedContext = useContext(LikedContext);

	const removeFromLiked = (productId) => {
		const updatedLikedProducts = likedProducts.filter(
			(product) => product.id !== productId
		);
		setLikedProducts(updatedLikedProducts);
		localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
	};

	return (
		<Center>
			<Title>Liked Products</Title>

			<ProductsGrid>
				{likedContext.likedItems.map((product) => (
					<ProductCard
						key={product.id}
						{...product}
						removeFromLiked={() => removeFromLiked(product.id)}
					/>
				))}
			</ProductsGrid>
		</Center>
	);
}

const Title = styled.h2`
	font-size: 1.5rem;
	margin: 20px 0 20px 0;
	font-family: "Montserrat";
`;

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;
	font-family: "Montserrat";
	margin-top: 20px;

	@media (max-width: 1100px) {
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		gap: 10px;
	}
`;

export default Liked;
