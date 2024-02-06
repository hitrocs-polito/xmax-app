import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Center from "../Layout/Center";
import { useNavigate, useParams } from "react-router-dom";
import phoneDatabase from "../../../assets/products";
import { PulseLoader } from "react-spinners";
import CartContext from "../../contexts/CartContext";

function ProductDetail() {
	const [index, setIndex] = useState(0);
	const { id } = useParams();
	const productId = parseInt(id);
	const cartContext = useContext(CartContext);
	const navigate = useNavigate();
	let [loading, setLoading] = useState(false);
	const [product, setProduct] = useState({});
	const [activeImage, setActiveImage] = useState("");

	console.log("active image", activeImage);

	// const product = phoneDatabase.find((item) => item.id === productId);

	const apiKey =
		"8c67d307d31451abca1ac27d30c00f7d478ea298f332974b4bc3ab15bd6c7fe386081b9d726b4f4e85febb89fd949bc2334b40c5607c2dd57fe7f6ec3efd2177";
	const fullUrl = `https://xmax.onrender.com/products/${productId}/`;

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(fullUrl, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"api-key": apiKey,
					},
				});

				if (!response.ok) {
					throw new Error(`Ошибка: ${response.status}`);
					setLoading(false);
				}

				const data = await response.json();

				if (data) {
					setProduct(data.product);
					setLoading(false);
					// console.log(data.product);
				} else {
					console.error("Ошибка: Некорректные данные получены от сервера.");
				}
			} catch (error) {
				console.error("Ошибка при запросе данных:", error.message);
				setLoading(false);
			}
		};

		fetchData();
	}, [fullUrl]);

	const handleTab = (index) => {
		setIndex(index);
	};

	const handleAddToCard = (product) => {
		dispatch(addToCart(product));
		dispatch(getTotals());
	};

	const handleNavigate = (product) => {
		cartContext.increaseCartQuantity(product);
		navigate("/checkout");
	};

	console.log("from server: ", product);

	// Render product details

	return (
		<Center>
			<ProductContainer>
				{loading ? (
					<LoaderContainer>
						<PulseLoader
							color="#FFA542"
							loading={loading}
							margin={2}
							size={25}
						/>
					</LoaderContainer>
				) : (
					<Outer>
						<StyledButton style={{ width: "7rem" }}>
							<a style={{ textDecoration: "none", color: "white" }} href="/">
								Orqaga
							</a>
						</StyledButton>
						<InnerContainer>
							{
								<ImageContainer>
									{product && product.images && product.images[0] && (
										<Image
											src={product?.images?.[0]?.filename}
											alt={product.name}
										/>
									)}
									{
										<ImageButtons>
											{product?.images?.map((img, index) => (
												<ImageButton>
													<Image
														src={img.filename}
														alt="/"
														key={img.id}
														onClick={() => setActiveImage(img.filename)}
														// style={{
														// 	opacity: img.id === index ? 1 : 0.7,
														// 	border: img.id === index ? "1px solid orange" : "",
														// }}
													/>
												</ImageButton>
											))}
										</ImageButtons>
									}
								</ImageContainer>
							}
							<DetailContainer>
								<StyledTitle>
									<Title>{product.name}</Title>
									<LineSeparator />
									<Title2>
										{Math.round(product.price)
											.toLocaleString("en-US")
											.replace(/,/g, " ")}{" "}
										so'm
									</Title2>
									<p>
										<b>Mahsulot haqida qisqacha:</b>
										<br></br>
										{product.description}
									</p>
								</StyledTitle>
								<StyledButton
									onClick={() => cartContext.increaseCartQuantity(product)}
								>
									Savatga qo'shish
								</StyledButton>
							</DetailContainer>
						</InnerContainer>
					</Outer>
				)}
			</ProductContainer>
		</Center>
	);
}

const Image = styled.img`
	max-width: 100%;
	padding: 5px;
	max-height: 100%;
`;

const ImageButtons = styled.div`
	display: flex;
	gap: 10px;
	flex-grow: 0;
	margin-top: 10px;
`;

const ImageButton = styled.div`
	border: 1px solid #eaeaea;
	max-height: 60px;
	max-width: 100px;
	padding: 2px;
	border-radius: 5px;
	cursor: pointer;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 500;
	margin: 0;
`;

const Title2 = styled.h4`
	font-size: 1.2rem;
	font-weight: 600;
	margin: 10px 0;
`;

const Outer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ProductContainer = styled.div``;
const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50vh; /* Adjust this value as needed to center the loader vertically */
`;

const LineSeparator = styled.div`
	width: 100%;
	height: 2px;
	background-color: lightgray;
	margin: 10px 0;
`;

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	grid-gap: 3rem;

	@media screen and (max-width: 786px) {
		grid-template-columns: 1fr;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0.5rem;
	border-radius: 8px;
	background-color: #fff;
`;

const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;

	@media screen and (max-width: 786px) {
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

	@media screen and (max-width: 786px) {
		width: auto;
	}
`;

const BigImg = styled.img`
	width: 100%;
	max-width: 300px;
	display: block;
	background-color: #fff;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

const SubImgContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: start;
	width: 300px;
	gap: 0.1rem;
`;

const SubImgWrapper = styled.div`
	/* width: 110px;
	height: 200px;
	margin-top: 10px; */
`;

const SubImg = styled.img`
	width: 100%;
	max-width: 300px;
	display: block;
	background-color: #fff;
	padding: 5px;
	object-fit: cover;
	border: 1px solid #ddd;
	opacity: "0.7";
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3ms;
	height: 100px;
`;

const StyledButton = styled.button`
	width: 10rem;
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
	}
`;

const StyledTitle = styled.div`
	max-width: 700px;
	background-color: #eaeaea;
	/* border-radius: 10px; */
`;

export default ProductDetail;
