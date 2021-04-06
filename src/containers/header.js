import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Header() {
	const profile = useSelector((state) => state.profile);

	let delimiter = "";
	if (profile.firstname && profile.lastname) delimiter = " - ";

	let pageName = "";
	const location = useLocation();

	switch (true) {
		case location.pathname == "/profile":
			pageName = "Профиль";
			break;

		case location.pathname.indexOf("/chat") != -1:
			pageName = "Чат";
			break;

		case location.pathname == "/":
			pageName = "Главная";
			break;

		default:
			pageName = "Мессенджер";
			break;
	}

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
			<Navbar.Text>{pageName + delimiter + profile.firstname + " " + profile.lastname}</Navbar.Text>
		</Navbar>
	);
}
