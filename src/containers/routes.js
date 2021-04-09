import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";
import HeaderContainer from "./header";
import { history } from "../store";
import { ConnectedRouter } from "connected-react-router";

export default function Routes() {
	return (
		<BrowserRouter>
			{/* подключение connected-react-router */}
			{/* <ConnectedRouter history={history}> */}
			<HeaderContainer />
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
			{/* </ConnectedRouter> */}
		</BrowserRouter>
	);
}
