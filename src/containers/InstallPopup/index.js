import React, { useEffect, useState } from "react";
import { CloseButton } from "react-bootstrap";
import "./styles.css";

export default function InstallPopup() {
	const [isShow, setShow] = useState(false);
	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		return /iphone/.test(userAgent);
	};

	const isInStandaloneMode = () => "standalone" in window.navigator && window.navigator.standalone;

	const handleShow = () => {
		setShow(true);
	};

	const handleHide = () => {
		setShow(false);
	};

	useEffect(() => {
		if (isIos() && !isInStandaloneMode()) {
			setShow(true);
		}
	}, []);

	return (
		<div style={{ display: isShow ? "block" : "none" }} className="speech-bubble-container">
			<div className="speech-bubble">
				<CloseButton className="close-install-message-icon" onClick={handleHide} />
				<div style={{ paddingRight: "15px" }}>Установи приложение на свое устройство</div>
			</div>
		</div>
	);
}
