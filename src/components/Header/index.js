import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PushToggle from "../PushToggle";

export default function Header({ title, pageName, username, linkHome, linkProfile, titleProfile, linkFacts, titleFacts }) {
	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Link to={linkHome}>
				{/* connected-react-router */}
				{/* <a onClick={linkHome}> */}
				<Navbar.Brand>{title}</Navbar.Brand>
				{/* </a> */}
			</Link>
			{/* Подписка на push */}
			<PushToggle />
			<Nav className="mr-auto">
				<Link to={linkProfile} className="nav-link">
					{/* <a onClick={linkProfile} className="nav-link"> */}
					{titleProfile}
					{/* </a> */}
				</Link>

				<Link to={linkFacts} className="nav-link">
					{/* <a onClick={linkFacts} className="nav-link"> */}
					{titleFacts}
					{/* </a> */}
				</Link>
			</Nav>
			<Navbar.Text>{pageName + username}</Navbar.Text>
		</Navbar>
	);
}
