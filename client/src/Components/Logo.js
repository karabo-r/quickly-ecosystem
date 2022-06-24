// import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" style={{ color: "black" }}>
			<Container>
				<h1 title="View more Quickly apps">Quickly</h1>
			</Container>
		</Link>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 2.6rem;
	left: 4rem;
	height: 3rem;

	h1 {
		font-size: 1.4rem;
		font-weight: bold;
		cursor: pointer;
		text-decoration: none;

		:hover {
			opacity: 100%;
			color: black;
			text-underline-offset: 10px;
			text-decoration-thickness: 2px;
		}
	}
`;

export default Logo;
