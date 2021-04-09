import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { removeMessage, botResponse } from "../store/messages/actions";
import { AUTHORS } from "../utils/constants";
import Message from "../components/Message";
import Textaera from "./textaera";

export default function Messagefield() {
	const messagesEndRef = useRef(null); // ссылка для прокрутки на последнее сообщение

	const { chatId } = useParams();

	const messages = useSelector((state) => state.messages[chatId]);
	const dispatch = useDispatch();

	const sendMessage = useCallback(
		(text, author) => {
			dispatch(botResponse(chatId, text, author));
		},
		[chatId]
	);

	useEffect(() => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	}, [messages]);

	const handleRemove = (messageId) => {
		dispatch(removeMessage(messageId));
	};

	return (
		<div className="messagefield">
			<div className="messages">
				{messages?.map(({ text, author, id }) => (
					<Message text={text} author={author} isSender={author == AUTHORS.user} handleRemove={() => handleRemove(id)} key={id} />
				))}
				<div ref={messagesEndRef} />
			</div>
			<Textaera onSendMessage={sendMessage} />
		</div>
	);
}
