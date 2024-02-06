import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
	width: 100%;

	th {
		text-align: left;
		text-transform: uppercase;
		color: #727272;
		font-weight: 600;
		font-size: 0.7rem;
	}
	td {
		font-weight: 500;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}
`;
const Table = (props) => {
	return <StyledTable {...props} />;
};

export default Table;
