import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Center from "./Center";
import Navbar from "./Navbar";
import styled from "styled-components";

const Content = styled.div`
	flex: 1 0 auto;
	/* padding: 20px; */
`;

function Layout() {
	return (
		<>
			<Content>
				<Navbar />
				<Outlet />
			</Content>
			<Footer />
		</>
	);
}

export default Layout;
