import React, { useEffect, useRef } from "react";
import { AUTHORS } from "../utils/constants";
import Message from "./message";
import Textaera from "./textaera";

export default function Messagefield({ messages, sendMessage }) {
	const messagesEndRef = useRef(null); // ссылка для прокрутки на последнее сообщение

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
