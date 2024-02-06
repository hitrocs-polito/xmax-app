import React, { useEffect, useState } from "react";
import Center from "../Layout/Center";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import phoneDatabase from "../../../assets/products";
import CategorySlider from "./Slider/CategorySlider";
import { PulseLoader } from "react-spinners";
import { API_KEY, API_URL } from "../utilities/Constants";
import Pagination from "../utilities/Pagination";

function ProductsMenu() {
	let [loading, setLoading] = useState(false);
	const [selectedModel, setSelectedModel] = useState("All");
	const [phoneDatabase, setPhoneDatabase] = useState([]);
	const [phoneCategory, setPhoneCategory] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [phonesPerPage] = useState(10);

	const indexOfLastPhone = currentPage * phonesPerPage;
	const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
	const currentPhones = phoneDatabase.slice(
		indexOfFirstPhone,
		indexOfLastPhone
	);

	useEffect(() => {
		setLoading(true);

		const apiUrl = `${API_URL}/home/`;

		fetch(apiUrl, {
			headers: {
				"api-key": API_KEY,
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data.products);
				console.log(data.categories);

				setPhoneDatabase(data.products); // update phoneDatabase state with fetched data
				setPhoneCategory(data.categories);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	const handleModelSelect = (model) => {
		setSelectedModel(model);
	};

	const filteredPhones =
		selectedModel === "All"
			? phoneDatabase
			: phoneDatabase.filter(
					(product) => product.category.id === selectedModel
			  );

	const paginate = (pageNumber) => {
		console.log("pageNumber: ", pageNumber);
		setCurrentPage(pageNumber);
	};

	return (
		<Center>
			{loading ? (
				<div>
					<Title>Телефоны</Title>

					<LoaderContainer>
						<PulseLoader
							color="#FFA542"
							loading={loading}
							margin={2}
							size={25}
						/>
					</LoaderContainer>
				</div>
			) : (
				<div>
					<CategorySlider
						selectedModel={selectedModel}
						onSelectModel={handleModelSelect}
						phoneCategory={phoneCategory}
					/>
					<ProductsGrid>
						{currentPhones.map((product) => (
							<ProductCard key={product.id} {...product} />
						))}
					</ProductsGrid>
				</div>
			)}
			<Pagination
				phonesPerPage={phonesPerPage}
				totalPhones={phoneDatabase.length}
				paginate={paginate}
			/>
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
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
	font-family: "Montserrat";

	@media screen and (max-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));

		grid-gap: 10px;
	}
`;

const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50vh; /* Adjust this value as needed to center the loader vertically */
`;

export default ProductsMenu;
