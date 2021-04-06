import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addMessage } from "../store/messages/actions";
import { AUTHORS } from "../utils/constants";
import Message from "./message";
import Textaera from "./textaera";

export default function Messagefield() {
	const messagesEndRef = useRef(null); // ссылка для прокрутки на последнее сообщение

	const { chatId } = useParams();

	const messages = useSelector((state) => state.messages[chatId]);
	const dispatch = useDispatch();

	const sendMessage = useCallback(
		(text, author) => {
			dispatch(addMessage(chatId, text, author));
		},
		[chatId]
	);

	useEffect(() => {
		let timeout;

		if (messages && messages[messages.length - 1]?.author == AUTHORS.user) {
			timeout = setTimeout(() => {
				sendMessage("Напиши мне что-то интереснее...", AUTHORS.BOT);
			}, 1000);
		}
		messagesEndRef.current.scrollIntoView();

		return () => clearTimeout(timeout);
	}, [messages]);

	return (
		<div className="messagefield">
			<div className="messages">
				{messages?.map(({ text, author, id }) => (
					<Message text={text} author={author} key={id} />
				))}
				<div ref={messagesEndRef} />
			</div>
			<Textaera onSendMessage={sendMessage} />
		</div>
	);
}
