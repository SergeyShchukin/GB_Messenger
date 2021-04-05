import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Header({ chatName }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Link to="/">
				<Navbar.Brand>First messanger!</Navbar.Brand>
			</Link>
			<Nav className="mr-auto">
				<Link to="/profile" className="nav-link">
					Профиль
				</Link>
			</Nav>
			<Navbar.Text>{chatName}</Navbar.Text>
		</Navbar>
	);
}
