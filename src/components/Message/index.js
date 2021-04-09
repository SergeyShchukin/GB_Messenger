import React from "react";
import { CloseButton } from "react-bootstrap";
import "./styles.css";

export default function Message({ text, author, isSender, handleRemove }) {
	return (
		<div className={`message ${isSender ? "sender" : "recipient"}`}>
			<CloseButton onClick={handleRemove}></CloseButton>
			<div>{text}</div>
			<div className="author">{author}</div>
		</div>
	);
}
