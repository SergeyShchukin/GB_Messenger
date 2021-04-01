import React, { useState } from "react";
import { AUTHORS } from "../utils/constants";
import { Button, Form } from "react-bootstrap";

export default function Textarea({ onSendMessage }) {
	const [value, setValue] = useState();

	const handleChange = (ev) => {
		setValue(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSendMessage(value, AUTHORS.user);
		setValue("");
	};

	const handleKeyUp = (ev) => {
		if (!ev.shiftKey && ev.keyCode === 13) {
			onSendMessage(value, AUTHORS.user);
			setValue("");
		}
	};
	const handleKeyDown = (ev) => {
		// убрать перенос строки при нажатии enter
		if (!ev.shiftKey && ev.keyCode === 13) ev.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Control as="textarea" onChange={handleChange} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} value={value} placeholder="Введите текст" />
			<Button type="submit" block>
				Отправить сообщение
			</Button>
		</Form>
	);
}
