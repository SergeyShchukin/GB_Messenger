import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Header({ title, pageName, username, linkHome, linkProfile, titleProfile }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Link to={linkHome}>
				{/* connected-react-router */}
				{/* <a onClick={linkHome}> */}
				<Navbar.Brand>{title}</Navbar.Brand>
				{/* </a> */}
			</Link>
			<Nav className="mr-auto">
				<Link to={linkProfile} className="nav-link">
					{/* <a onClick={linkProfile} className="nav-link"> */}
					{titleProfile}
					{/* </a> */}
				</Link>
			</Nav>
			<Navbar.Text>{pageName + username}</Navbar.Text>
		</Navbar>
	);
}
