import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route exact path="/profile">
					<App />
				</Route>
				<Route exact path="/chat/:chatId">
					<App />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
