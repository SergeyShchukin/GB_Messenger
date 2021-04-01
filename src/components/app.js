import React from "react";
import Header from "./header";
import Chatlist from "./chatlist";
import Messagefield from "./messagefield";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<>
			<Header />
			<Chatlist />
			<Messagefield />
		</>
	);
}
