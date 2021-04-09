import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Routes from "./containers/routes";
import "./styles/styles.css";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "react-bootstrap/Spinner";

export const App = () => (
	<Provider store={store}>
		<PersistGate loading={<Spinner animation="border" />} persistor={persistor}>
			<Routes />
		</PersistGate>
	</Provider>
);
