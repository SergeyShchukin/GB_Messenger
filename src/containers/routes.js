import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";
import Header from "./header";

export default function Routes() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/chat/:chatId">
					<App />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
