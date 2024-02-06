import React from "react";
import styled from "styled-components";

const ImageContainer = ({ images }) => {
	return (
		<>
			<Image src={images[0]?.filename} alt="" />

			<div>
				{images.map((image) => {
					<ImageButtons>
						<Image src={image.filename} alt="/" />;
					</ImageButtons>;
				})}
			</div>
		</>
	);
};

const ImageButtons = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const Image = styled.img`
	width: 100%;
`;

export default ImageContainer;
