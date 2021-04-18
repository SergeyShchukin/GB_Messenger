import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "regenerator-runtime/runtime.js";

// для дз по методичке
// import "./scripts/notifications.js";
// import "./scripts/swRegistration.js";

ReactDOM.render(<App />, document.getElementById("app"));

window.addEventListener("appinstalled", (evt) => {
	console.log("отправляем информацию об установке приложения");
	// fetch("url", {
	// 	method: "GET",
	// 	credentials: "include",
	// });
});
