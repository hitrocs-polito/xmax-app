import React from "react";
import styled from "styled-components";

const Pagination = ({ phonesPerPage, totalPhones, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPhones / phonesPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<PaginationContainer>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<PageNumber key={number} className="page-item">
						<PageLink
							onClick={() => paginate(number)}
							href="#"
							className="page-link"
						>
							{number}
						</PageLink>
					</PageNumber>
				))}
			</ul>
		</PaginationContainer>
	);
};

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const PageNumber = styled.li`
	margin: 0 5px;
	width: 40px;
	height: 40px;
	text-align: center;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 5px;
	transition: background-color 0.3s ease;
	font-weight: 500;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const PageLink = styled.a`
	display: block;
	padding: 8px 12px;
	color: #333;
	text-decoration: none;
`;

export default Pagination;
