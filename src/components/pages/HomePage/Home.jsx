import React from "react";
import Banner from "./Banner";
import ProductsMenu from "./ProductsMenu";
import { HashLoader } from "react-spinners";

import { useState } from "react";

function Home() {
	return (
		<>
			<Banner />
			<ProductsMenu />
		</>
	);
}

export default Home;
