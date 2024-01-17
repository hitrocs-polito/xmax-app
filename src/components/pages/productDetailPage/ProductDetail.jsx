import React, { useState } from "react";
import styled from "styled-components";
import Center from "../Layout/Center";
import { useParams } from "react-router-dom";
import phoneDatabase from "../../../assets/products";
import CartWithQuantity from "../HomePage/CartWithQuantity";

const ProductContainer = styled.div`
	margin: 0 auto;
	padding: 10px 0;
	/* background-color: #fff; */
	/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	border-radius: 8px;

	h2 {
		margin: 1rem 0;
		font-size: 2rem;
	}

	h4 {
		margin: 0;
		font-size: 1.3rem;
	}

	p {
		font-size: 16px;
	}
`;

const LineSeparator = styled.div`
	width: 100%;
	height: 1px;
	background-color: lightgray;
	margin: 5px 0;
`;

const InnerContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 1024px) {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: start;
	max-width: 500px;
	height: 450px;
	/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
	border-radius: 8px;

	@media screen and (max-width: 1000px) {
	}

	@media screen and (max-width: 600px) {
		width: 600px;
		width: 100%;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

const DetailContainer = styled.div`
	margin-left: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 500px;
	height: 450px;
	border-radius: 8px;

	@media screen and (max-width: 1024px) {
		margin-left: 0;
	}

	@media screen and (max-width: 600px) {
		width: auto;
	}
`;
const BigImgContainer = styled.div`
	background-color: #fff;
	max-width: 600px;
	width: 400px;
	height: 450px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1000px) {
	}

	@media screen and (max-width: 600px) {
		width: 430px;
		width: auto;
		/* height: auto; */
	}
`;

const BigImg = styled.img`
	width: 100%;
	max-width: 300px;
	display: block;
	background-color: #fff;
	border-radius: 10px;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}

	@media screen and (max-width: 1000px) {
	}

	@media screen and (max-width: 600px) {
	}
`;

const SubImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	margin-left: 10px;
	gap: 0.5rem;

	@media screen and (max-width: 600px) {
		margin: 0;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const SubImg = styled.img`
	width: 100%;
	max-width: 93px;
	background-color: #fff;
	padding: 5px;
	display: block;
	object-fit: cover;
	border: 1px solid #ddd;
	margin-right: 5px;
	opacity: "0.7";
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3ms;

	@media screen and (max-width: 600px) {
		width: 80px;
	}
`;

const StyledButton = styled.button`
	width: 230px;
	height: 45px;
	flex-shrink: 0;
	border: 0;
	color: #fff;
	cursor: pointer;
	text-align: center;
	font-family: Montserrat;
	font-size: 15px;
	font-style: normal;
	font-weight: 500;
	border-radius: 10px;
	background: #101010;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);

	@media screen and (max-width: 600px) {
		width: 180px;
		margin-top: 1rem;
	}
`;

const StyledTitle = styled.div`
	max-width: 700px;
	height: 400px;
	background-color: #fff;
	padding: 0px 20px;
	border-radius: 10px;
`;

function ProductDetail() {
	const [index, setIndex] = useState(0);
	const { id } = useParams();
	const productId = parseInt(id);

	const product = phoneDatabase.find((item) => item.id === productId);

	const handleTab = (index) => {
		setIndex(index);
	};

	// Render product details
	return (
		<Center>
			<ProductContainer>
				{product ? (
					<InnerContainer>
						<ImageContainer>
							<BigImgContainer>
								<BigImg src={product.imgUrl[index]} alt={product.title} />
							</BigImgContainer>
							<SubImgContainer>
								{product.imgUrl.map((img, i) => (
									<SubImg
										src={img}
										alt="/"
										key={i}
										onClick={() => handleTab(i)}
										style={{
											opacity: i === index ? 1 : 0.7,
											border: i === index ? "1px solid orange" : "",
										}}
									/>
								))}
							</SubImgContainer>
						</ImageContainer>
						<DetailContainer>
							<StyledTitle>
								<h2>{product.title}</h2>
								<LineSeparator />
								<h4>
									<span>Narxi: </span>
									{Math.round(product.price)
										.toLocaleString("en-US")
										.replace(/,/g, " ")}{" "}
									сум
								</h4>
								<LineSeparator />
								<p>
									<b>Mahsulot haqida qisqacha:</b>
									<br></br>
									{product.description}
								</p>
							</StyledTitle>

							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<StyledButton>Купить!</StyledButton>
								<StyledButton>Добавить в корзину</StyledButton>
							</div>
						</DetailContainer>
					</InnerContainer>
				) : (
					<p>Product not found</p>
				)}
			</ProductContainer>
		</Center>
	);
}

export default ProductDetail;
