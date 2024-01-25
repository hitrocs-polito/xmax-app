import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Center from "../Layout/Center";
import { useNavigate, useParams } from "react-router-dom";
import phoneDatabase from "../../../assets/products";
import { useDispatch, useSelector } from "react-redux";
import CartContext from "../../contexts/CartContext";

function ProductDetail() {
	const [index, setIndex] = useState(0);
	const { id } = useParams();
	const productId = parseInt(id);
	const dispatch = useDispatch();
	const cartContext = useContext(CartContext);
	const navigate = useNavigate();
	let [loading, setLoading] = useState(false);

	// const product = phoneDatabase.find((item) => item.id === productId);
	const [product, setProduct] = useState({});

	// useEffect(() => {
	// 	setLoading(true);

	// const apiKey =
	// 	"8c67d307d31451abca1ac27d30c00f7d478ea298f332974b4bc3ab15bd6c7fe386081b9d726b4f4e85febb89fd949bc2334b40c5607c2dd57fe7f6ec3efd2177";
	// 	const apiUrl = `https://xmax.onrender.com/products/${id}`;

	// 	// Make your fetch request here
	// 	fetch(apiUrl, {
	// 		headers: {
	// 			"api-key": apiKey,
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			// console.log("product with id: ", data.product.images[1].filename);
	// 			setProduct(data.product);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching data:", error);
	// 			setLoading(false);
	// 		});
	// }, []);

	const apiKey =
		"8c67d307d31451abca1ac27d30c00f7d478ea298f332974b4bc3ab15bd6c7fe386081b9d726b4f4e85febb89fd949bc2334b40c5607c2dd57fe7f6ec3efd2177";
	const fullUrl = "https://xmax.onrender.com/products/1/";

	useEffect(() => {
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
				}

				const data = await response.json();

				if (data) {
					setProduct(data.product);
					// console.log(data.product);
				} else {
					console.error("Ошибка: Некорректные данные получены от сервера.");
				}
			} catch (error) {
				console.error("Ошибка при запросе данных:", error.message);
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
				{product ? (
					<InnerContainer>
						{
							<ImageContainer>
								{
									<BigImgContainer>
										{product && product.images && product.images[0] && (
											<BigImg
												src={product.images[0].filename}
												alt={product.name}
											/>
										)}
									</BigImgContainer>
								}
								{
									// <SubImgContainer>
									// 	{product.images.map((img, index) => (
									// 		<SubImgWrapper>
									// 			<SubImg
									// 				src={img.filename}
									// 				alt="/"
									// 				key={img.id}
									// 				onClick={() => handleTab(img.id)}
									// 				// style={{
									// 				// 	opacity: img.id === index ? 1 : 0.7,
									// 				// 	border: img.id === index ? "1px solid orange" : "",
									// 				// }}
									// 			/>
									// 		</SubImgWrapper>
									// 	))}
									// </SubImgContainer>
								}
							</ImageContainer>
						}
						<DetailContainer>
							<StyledTitle>
								<h2>{product.name}</h2>
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
								<StyledButton onClick={() => handleNavigate(product)}>
									Купить!
								</StyledButton>
								<StyledButton
									onClick={() => cartContext.increaseCartQuantity(product)}
								>
									Добавить в корзину
								</StyledButton>
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
	justify-content: start;
	align-items: start;
	margin-left: 10px;
	/* width: 93px; */
	gap: 0.5rem;
	overflow-x: auto;

	@media screen and (max-width: 600px) {
		margin: 0;
		flex-direction: row;
		justify-content: start;
	}
`;

const SubImgWrapper = styled.div`
	/* max-width: 93px; */
`;

const SubImg = styled.img`
	width: 100%;
	max-width: 85px;
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

export default ProductDetail;
