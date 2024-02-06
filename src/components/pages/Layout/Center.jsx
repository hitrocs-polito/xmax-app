import styled from "styled-components";

const StyledDiv = styled.div`
	padding: 0 30px;
	margin: 0 auto;

	@media screen and (max-width: 430px) {
		padding: 0 10px;
	}
`;

function Center({ children }) {
	return <StyledDiv>{children}</StyledDiv>;
}

export default Center;
