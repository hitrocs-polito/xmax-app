// Import React and styled-components
import React from "react";
import styled from "styled-components";
import photo from "../../../assets/not-found.jpeg";
import NotFound from "../../icons/NotFound";

// Define a styled component for the 404 page
const NotFoundDiv = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 300px) {
		height: 100vh;
	}
`;

const NotFoundPhoto = styled.img`
	width: 100%;
	width: 200px;
`;

// Define a styled component for the 404 message
const Message = styled.h1`
	color: #010101;
	font-size: 1.7rem;
	text-align: center;
	@media screen and (max-width: 600px) {
		font-size: 1.2rem;
		padding: 0 1rem;
	}
`;

const BackButton = styled.a`
	background-color: #010101;
	color: #fff;
	font-size: 1rem;
	padding: 15px 30px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	font-family: "Montserrat";
	text-decoration: none;
	&:hover {
		background-color: #010101c5;
	}
`;

// Define the NotFoundPage component
function NotFoundPage() {
	return (
		<NotFoundDiv>
			<NotFound />
			<Message>Kechirasiz, siz qidirgan sahifa topilmadi.</Message>
			<BackButton href="/">Bosh sahifa</BackButton>
		</NotFoundDiv>
	);
}

export default NotFoundPage;
