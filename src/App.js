import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Routes from "./containers/routes";

export const App = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);
