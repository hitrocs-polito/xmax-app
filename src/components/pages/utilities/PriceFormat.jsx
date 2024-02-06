import React from "react";

const PriceFormat = (props) => {
	return (
		<p>
			{Math.round(props.props).toLocaleString("en-US").replace(/,/g, " ")} so'm
		</p>
		// {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
	);
};

export default PriceFormat;
