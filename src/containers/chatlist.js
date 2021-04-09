import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { Button, CloseButton, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChatWithMessages } from "../store/chats/actions";
import { history } from "../store";

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

	const handleRemove = (chatId) => {
		dispatch(removeChatWithMessages(chatId));
	};

	// // connected-react-router

	// const selectChat = (chatId) => {
	// 	history.push(`/chat/${chatId}`);
	// };

	return (
		<div className="chatlist">
			<ListGroup as="ul">
				{chats.map((chat) => (
					<Link to={`/chat/${chat.id}`} key={chat.id}>
						{/* <a onClick={() => selectChat(chat.id)} key={chat.id}> */}
						<ListGroup.Item className={chat.className} action variant="secondary" as="li" eventKey={`#link${chat.id}`}>
							{chat.name}
							<CloseButton onClick={() => handleRemove(chat.id)}></CloseButton>
						</ListGroup.Item>
						{/* </a> */}
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
