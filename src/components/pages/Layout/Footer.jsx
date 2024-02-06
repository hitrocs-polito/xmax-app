import styled from "styled-components";
import Center from "./Center";
import { FaTelegram, FaInstagram } from "react-icons/fa";

const FooterStyle = styled.div`
	flex-shrink: 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	background-color: white;
	margin: 20px 0 0;
	padding: 20px 29px;
	border-radius: 30px 30px 0 0;
	font-weight: 500;

	@media screen and (max-width: 830px) {
		grid-template-columns: 1fr 1fr 1fr;
		padding: 33.42px 0px;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 0.5fr 1.5fr;
		padding: 15px 0 15px;
		font-size: 15px;
	}
`;

const FooterTitle = styled.h2`
	margin: 0;
	cursor: pointer;
	@media screen and (max-width: 830px) {
		display: none;
	}
`;

const UlStyle = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin: 0;
	padding-left: 20px;

	@media screen and (max-width: 600px) {
		align-items: start;
	}
`;

const LinkStyle = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin: 0;
	justify-content: start;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

const ListStyle = styled.li`
	display: flex;
	list-style: none;
	font-size: 17px;
	margin: 0;
	cursor: pointer;
`;

const LangStyle = styled.ul`
	display: flex;
	gap: 10px;
	padding: 0;
`;

const SocialStyle = styled.ul`
	display: flex;
	gap: 17.6px;
	justify-content: center;
	align-items: start;
	margin: 0;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 500px) {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
`;

const Wrapper = styled.div`
	flex-shrink: 0;
`;

function Footer() {
	return (
		<Wrapper>
			<Center>
				<FooterStyle>
					<FooterTitle>X-MAX MOBILE</FooterTitle>
					<LinkStyle>
						<ListStyle>Избранное</ListStyle>
						<ListStyle>Корзина</ListStyle>
						<ListStyle>Контакты</ListStyle>
					</LinkStyle>
					<UlStyle>
						<ListStyle>Условия сервиса</ListStyle>
						<LangStyle>
							<ListStyle>🌐</ListStyle>
							<ListStyle>Uzb</ListStyle>
							<ListStyle>
								<b>Рус</b>
							</ListStyle>
							<ListStyle>Eng</ListStyle>
						</LangStyle>
					</UlStyle>
					<SocialStyle>
						<ListStyle>
							<FaInstagram size={27} />
						</ListStyle>
						<ListStyle>
							<FaTelegram size={27} />
						</ListStyle>
					</SocialStyle>
				</FooterStyle>
			</Center>
		</Wrapper>
	);
}

export default Footer;
