import React from "react";
import Center from "../Layout/Center";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { API_KEY, API_URL } from "../../pages/utilities/Constants";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";

const ProductPage = () => {
	const { id } = useParams();
	const productId = parseInt(id);
	let [loading, setLoading] = useState(false);
	const [product, setProduct] = useState({});

	const fullUrl = `${API_URL}/products/${productId}/`;

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(fullUrl, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"api-key": API_KEY,
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

	console.log("product: ", product);
	return (
		<Center>
			{loading ? (
				<LoaderContainer>
					<PulseLoader color="#FFA542" loading={loading} margin={2} size={25} />
				</LoaderContainer>
			) : (
				<ColWrapper>
					<WhiteBox>
						{product && product.images && product.images[0] && (
							<ImgContainer>
								<Image src={product?.images[0]?.filename} alt="" />
								<div>
									{product?.images?.map((img) => {
										console.log(img);

										<Image src={img?.filename} alt="/" key={img?.id} />;
									})}
								</div>
							</ImgContainer>
						)}
					</WhiteBox>
					<div>
						<h2>{product.name}</h2>
						<p>{product.description}</p>
					</div>
				</ColWrapper>
			)}
		</Center>
	);
};

const ImgContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const ImageButtons = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const Image = styled.img`
	width: 100%;
`;

const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 75vh; /* Adjust this value as needed to center the loader vertically */
`;

const ColWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	gap: 40px;
	margin-top: 40px;
`;

const WhiteBox = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
`;

export default ProductPage;
