import React from "react";
import Banner from "./Banner";
import ProductsMenu from "./ProductsMenu";
import { HashLoader } from "react-spinners";

import { useState } from "react";

function Home() {
	console.log("Home page is working!");

	return (
		<>
			<Banner />
			<ProductsMenu />
		</>
	);
}

export default Home;
