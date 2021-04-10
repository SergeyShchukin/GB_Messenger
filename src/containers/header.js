import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { history } from "../store";

export default function HeaderContainer() {
	const profile = useSelector((state) => state.profile);
	const pathname = useSelector((state) => state.router.location.pathname);

	let delimiter = "";
	if (profile.firstname || profile.lastname) delimiter = " - ";

	let pageName = "";

	switch (true) {
		case pathname == "/profile":
			pageName = "Профиль";
			break;

		case pathname.indexOf("/chat") != -1:
			pageName = "Чат";
			break;

		case pathname == "/":
			pageName = "Главная";
			break;

		default:
			pageName = "Мессенджер";
			break;
	}

	// // connected-react-router

	// const linkHome = () => {
	// 	history.push("/");
	// };
	// const linkProfile = () => {
	// 	history.push("/profile");
	// };

	// return (
	// 	<Header title="First Messenger!" pageName={pageName} username={delimiter + profile.firstname + " " + profile.lastname} linkHome={linkHome} linkProfile={linkProfile} titleProfile="Профиль" />
	// );

	return <Header title="First Messenger!" pageName={pageName} username={delimiter + profile.firstname + " " + profile.lastname} linkHome="/" linkProfile="/profile" titleProfile="Профиль" />;
}
