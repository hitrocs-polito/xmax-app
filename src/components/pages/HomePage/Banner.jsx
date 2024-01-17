import styled from "styled-components";
import Center from "../Layout/Center";

const Bg = styled.div`
	width: 80%;
	height: 197px;
	background-color: #101010;
	color: #fff;
	padding: 0px 0;
	margin: 10px auto 0;
	border-radius: 30px;

	@media screen and (max-width: 768px) {
		height: 176px;
	}

	@media screen and (max-width: 568px) {
		width: 80%;
	}
`;

const Title = styled.h1`
	margin: 30px auto;
	font-weight: normal;

	@media screen and (max-width: 768px) {
		font-size: 25px;
		margin: 30px 10px;
	}

	@media screen and (max-width: 568px) {
		font-size: 18px;
		margin: 50px 0;
	}

	@media screen and (max-width: 395px) {
		font-size: 15px;
	}
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 1rem;
	justify-content: start;
	height: 197px;
	overflow: hidden;
	img {
		width: 300px;
		margin-top: 10px;
	}

	@media screen and (max-width: 768px) {
		height: 176px;
		img {
			width: 235px;
		}
	}

	@media screen and (max-width: 625px) {
		img {
			margin-top: 8px;
			width: 160px;
		}
	}

	@media screen and (max-width: 438px) {
		height: 176px;
		img {
			margin-top: 15px;
			width: 140px;
		}
	}

	@media screen and (max-width: 395px) {
		img {
			width: 130px;
			margin-top: 20px;
		}
	}
`;

function Banner() {
	return (
		<Bg>
			<Center>
				<Wrapper>
					<Title>Аксессуары для Iphone 13 Pro Max</Title>
					<img
						src="https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/14/cc/14cc4d741fd62e843163113fd28ea7a3/231108150102044304.webp"
						alt="phone_image"
					/>
				</Wrapper>
			</Center>
		</Bg>
	);
}

export default Banner;
