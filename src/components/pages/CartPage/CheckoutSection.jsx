import React, { useState } from "react";
import styled from "styled-components";

const CheckoutSection = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Naqd");
	console.log(selectedPaymentMethod);
	return (
		<RadioInputs>
			<Radio>
				<RadioInput
					type="radio"
					name="radio"
					checked={selectedPaymentMethod === "Naqd"}
					onChange={() => setSelectedPaymentMethod("Naqd")}
				/>
				<RadioName>Naqd</RadioName>
			</Radio>
			<Radio>
				<RadioInput
					type="radio"
					name="radio"
					checked={selectedPaymentMethod === "Click"}
					onChange={() => setSelectedPaymentMethod("Click")}
				/>
				<RadioName>Click</RadioName>
			</Radio>
			<Radio>
				<RadioInput
					type="radio"
					name="radio"
					checked={selectedPaymentMethod === "Payme"}
					onChange={() => setSelectedPaymentMethod("Payme")}
				/>
				<RadioName>Payme</RadioName>
			</Radio>
		</RadioInputs>
	);
};

const RadioInputs = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: #eaeaea;
	padding: 0.25rem;
	width: 100%;
	margin-bottom: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
	font-family: "Montserrat";
`;

const Radio = styled.label`
	flex: 1 1 auto;
	text-align: center;
`;

const RadioInput = styled.input`
	display: none;

	&:checked + span {
		background-color: #fff;
		font-weight: 600;
	}
`;

const RadioName = styled.span`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border-radius: 0.5rem;
	border: none;
	padding: 0.5rem 0;
	color: rgba(51, 65, 85, 1);
	transition: all 0.15s ease-in-out;
`;

export default CheckoutSection;
