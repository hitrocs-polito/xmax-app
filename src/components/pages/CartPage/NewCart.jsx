import React, { useContext, useState } from "react";
import styled from "styled-components";
import Center from "../Layout/Center";
import EmptyCartPage from "./EmptyCartPage";
import CartContext from "../../contexts/CartContext";
import Table from "../utilities/Table";
import PriceFormat from "../utilities/PriceFormat";
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import { addToCartDatabase } from "../../apis/addToCartDatabase";
import { decreaseFromCartDatabase } from "../../apis/decreaseFromCart";
import payme from "../../../assets/images/payme-logo.png";
import click from "../../../assets/images/click-logo.png";

const NewCart = () => {
	const { cartItems, setCartItems } = useContext(CartContext);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Naqd");

	const [orderInfo, setOrderInfo] = useState({
		name: "",
		phoneNumber: "",
		additionalPhoneNumber: "",
		region: "",
		city: "",
		streetName: "",
		streetNumber: "",
		paymentMethod: selectedPaymentMethod,
	});

	const handleInputChange = (event) => {
		setOrderInfo({
			...orderInfo,
			[event.target.name]: event.target.value,
		});
	};

	const handleContinue = () => {
		// Handle form submission or navigation here
		console.log("Order Information:", orderInfo); // Access the collected data
		// Example: Send data to a server or proceed to the payment page
	};

	const totalQty = cartItems.reduce((total, cartItem) => {
		return cartItem.item
			? total + cartItem.item.price * cartItem.quantity
			: total + cartItem.price * cartItem.quantity;
	}, 0);

	const handleIncreaseCartQuantity = (item) => {
		setCartItems((currItems) => {
			if (!currItems.some((product) => item.id === product.id)) {
				// Product is not in the cart, add it as a new product
				return [...currItems, { ...item, quantity: 1 }];
			} else {
				// Product is already in the cart, update the quantity
				return currItems.map((product) => {
					if (product.id === item.id) {
						return { ...product, quantity: product.quantity + 1 };
					}
					return product;
				});
			}
		});
		console.log(`cart items in increasing cart: `, cartItems);

		addToCartDatabase(item);
	};

	const handleDecreaseCartQuantity = (item) => {
		setCartItems((currItems) => {
			if (currItems.find((product) => item.id === product.id)?.quantity === 1) {
				return currItems.filter((product) => item.id !== product.id);
			} else {
				return currItems.map((product) => {
					if (product.id === item.id) {
						return { ...product, quantity: product.quantity - 1 };
					} else return product;
				});
			}
		});

		decreaseFromCartDatabase(item);
	};

	return (
		<>
			<Center>
				{!cartItems?.length && <EmptyCartPage />}
				{!!cartItems?.length && (
					<ColumnWrapper>
						<FirstBox>
							<h2 style={{ margin: "0 0 5px 10px" }}>Savatcha</h2>
							<Table cellSpacing="10">
								<thead>
									<tr>
										<th>Mahsulot</th>
										<th>Miqdori</th>
										<th>Narxi</th>
									</tr>
								</thead>
								<tbody>
									{cartItems?.map((product) => {
										return (
											<tr>
												<ProductInfoRow>
													<ProductImageBox>
														<img
															src={product?.item?.images?.[0]?.filename || ""}
															alt={product?.item?.name}
														/>
													</ProductImageBox>
													<Title>{product?.item?.name}</Title>
												</ProductInfoRow>

												<td>
													<QtyLabel>
														<Button
															onClick={() =>
																handleDecreaseCartQuantity(product)
															}
														>
															<MinusIcon />
														</Button>

														<Label>{product.quantity}</Label>
														<Button
															onClick={() =>
																handleIncreaseCartQuantity(product)
															}
														>
															<PlusIcon />
														</Button>
													</QtyLabel>
												</td>
												<td>
													<PriceSum>
														<PriceFormat
															props={product?.item?.price * product.quantity}
														/>
													</PriceSum>
												</td>
											</tr>
										);
									})}
									<tr>
										<td>
											<b>Jami:</b>{" "}
										</td>
										<td></td>
										<td>
											<b>
												<PriceFormat props={totalQty} />
											</b>
										</td>
									</tr>
								</tbody>
							</Table>
						</FirstBox>

						<SecondBox>
							<h2 style={{ margin: "0 0 15px 0" }}>Yetkazib berish</h2>
							<form method="post" action="/">
								<Input
									required
									type="text"
									placeholder="Ism va familiya"
									name="name"
									value={orderInfo.name}
									onChange={handleInputChange}
								/>
								<Input
									required
									type="number"
									placeholder="Telefon raqam"
									name="number1"
									value={orderInfo.number1}
									onChange={handleInputChange}
								/>
								<Input
									type="number"
									placeholder="Qo'shimcha telefon raqam"
									name="number2"
									value={orderInfo.number2}
									onChange={handleInputChange}
								/>
								<Input
									required
									type="address"
									placeholder="Viloyat"
									name="region"
									value={orderInfo.region}
									onChange={handleInputChange}
								/>
								<Input
									required
									type="text"
									placeholder="Shahar / Tuman"
									name="city"
									value={orderInfo.city}
									onChange={handleInputChange}
								/>
								<StreetHolder>
									<Input
										required
										type="text"
										placeholder="Ko'cha nomi"
										name="streetName"
										value={orderInfo.streetName}
										onChange={handleInputChange}
									/>
									<Input
										required
										type="number"
										placeholder="Raqami"
										name="streetNumber"
										value={orderInfo.streetNumber}
										onChange={handleInputChange}
									/>
								</StreetHolder>
								<RadioInputs>
									<Radio>
										<RadioInput
											type="radio"
											name="radio"
											value="Naqd"
											checked={selectedPaymentMethod === "Naqd"}
											onChange={() => setSelectedPaymentMethod("Naqd")}
										/>
										<RadioName>Naqd 💵</RadioName>
									</Radio>
									<Radio>
										<RadioInput
											type="radio"
											name="radio"
											value="Click"
											checked={selectedPaymentMethod === "Click"}
											onChange={() => setSelectedPaymentMethod("Click")}
										/>
										<RadioName>
											<ClickLogo src={click} />
										</RadioName>
									</Radio>
									<Radio>
										<RadioInput
											type="radio"
											name="radio"
											value="Payme"
											checked={selectedPaymentMethod === "Payme"}
											onChange={() => setSelectedPaymentMethod("Payme")}
										/>
										<RadioName>
											<PaymeLogo src={payme} />
										</RadioName>
									</Radio>
								</RadioInputs>
								<StyledButton type="submit" onClick={handleContinue}>
									To'lovni amalga oshirish
								</StyledButton>
							</form>
						</SecondBox>
					</ColumnWrapper>
				)}
			</Center>
		</>
	);
};

const PaymeLogo = styled.img`
	width: 100%;
	width: 80px;
	padding: 2px 0;
`;
const ClickLogo = styled.img`
	width: 100%;
	width: 70px;
`;

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
		font-weight: 600;
		background-color: white;
	}

	&[value="Naqd"]:checked + span {
		/* border: 1px solid azure; */
		/* background-color: white; */
	}

	&[value="Click"]:checked + span {
		/* border: 1px solid #242429; */
		background-color: white;
	}

	&[value="Payme"]:checked + span {
		/* border: 1px solid #00cccc; */
		background-color: #00cccc;
	}
`;

const RadioName = styled.span`
	font-size: 18px;

	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border-radius: 0.5rem;
	border: none;
	padding: 7px 0;
	color: rgba(51, 65, 85, 1);
	transition: all 0.15s ease-in-out;
`;

const Title = styled.div`
	/* margin-left: 10px; */
`;
const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-sizing: border-box;
	font-size: 15px;
	font-family: "Montserrat";
`;

const StreetHolder = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 5px;
`;

const ProductInfoRow = styled.td`
	padding: 10px 0;
`;

const Button = styled.button`
	width: 25px;
	height: 25px;
	background-color: white;
	border: 0px;
	padding: 0;
`;

const QtyLabel = styled.div`
	border-radius: 5px;
	height: 35px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 30px; */

	width: 90px;
`;

const Label = styled.div`
	width: 30px;
	text-align: center;
`;

const PriceSum = styled.div`
	width: 150px;
	text-align: start;
	@media (max-width: 600px) {
		width: 80px;
	}
`;

const ProductImageBox = styled.div`
	width: 100%;
	width: 70px;
	height: 70px;
	padding: 2px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		max-width: 60px;
		max-height: 60px;
	}
	@media (min-width: 768px) {
		padding: 10px;
		width: 100px;
		height: 100px;

		img {
			max-width: 80px;
			max-height: 80px;
		}
	}
`;

const StyledButton = styled.button`
	width: 100%;
	font-family: "Montserrat";
	background-color: #000;
	color: #fff;
	padding: 16px;
	border-radius: 5px;
	border: none;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
`;

const ColumnWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;

	align-content: start;
	@media (min-width: 830px) {
		grid-template-columns: 1.2fr 0.8fr;
	}
`;

const FirstBox = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 20px 30px 30px;
	margin-bottom: 1rem;

	@media (max-width: 760px) {
		padding: 5px;
	}
`;

const SecondBox = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 20px 30px 30px;
	margin-bottom: 1rem;
	max-height: 30rem;

	@media (max-width: 760px) {
		padding: 15px;
	}
`;

export default NewCart;
