﻿import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chats/actions";

export default function Chatlist() {
	const chats = useSelector((state) => state.chats);
	const dispatch = useDispatch();

	const [newChat, setNewChat] = useState("");
	const handleChange = (ev) => {
		setNewChat(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (newChat && newChat.trim()) dispatch(addChat(newChat));
		setNewChat("");
	};

	return (
		<div className="chatlist">
			<ListGroup as="ul">
				{chats.map((chat) => (
					<Link to={`/chat/${chat.id}`} key={chat.id}>
						<ListGroup.Item action variant="secondary" as="li" eventKey={`#link${chat.id}`}>
							{chat.name}
						</ListGroup.Item>
					</Link>
				))}
			</ListGroup>

			<Form onSubmit={handleSubmit}>
				<Form.Control as="input" onChange={handleChange} value={newChat} placeholder="Добавить чат" />
				<Button variant="dark" type="submit" block>
					Добавить
				</Button>
			</Form>
		</div>
	);
}