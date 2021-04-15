import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage, botResponse } from "../store/messages/actions";
import { AUTHORS, RESERVED_CHAT } from "../utils/constants";
import Message from "../components/Message";
import Textaera from "./textaera";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router";

export default function Messagefield() {
	const messagesEndRef = useRef(null); // ссылка для прокрутки на последнее сообщение

	const { chatId } = useParams();

	const messages = useSelector((state) => state.messages[chatId]);
	const dispatch = useDispatch();

	const chats = useSelector((state) => state.chats);
	const isWriting = useMemo(() => chats.filter((chat) => chat.id == chatId)[0].isWriting, [chats, chatId]); // для анимации набора текста собеседником

	const newtonIsBad = useSelector((state) => state.newton.request.error); // для уведомления об ошибке в запросе к боту

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
		<>
			<div className="messagefield">
				<div className="messages">
					{messages?.map(({ text, author, id }) => (
						<Message text={text} author={author} isSender={author == AUTHORS.user} handleRemove={() => handleRemove(id)} key={id} />
					))}
					<div ref={messagesEndRef}></div>
				</div>
				{isWriting ? <div className="isWriting">Набирает текст</div> : null}
				<Textaera onSendMessage={sendMessage} />
			</div>
			{chatId == RESERVED_CHAT && newtonIsBad ? <Alert variant="danger">Ньютон заболел, посмотри в консоль и вылечи его</Alert> : null}
		</>
	);
}
