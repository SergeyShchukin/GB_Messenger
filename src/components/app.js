import React, { useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import Chatlist from "./chatlist";
import Messagefield from "./messagefield";
import Profile from "./profile";
import Header from "./header";

export default function App() {
	const [chats, addChat] = useState([]); // массив чатов id и названия
	const sendChat = useCallback((newChat) => {
		if (newChat) {
			addChat((prevChats) => {
				return [...prevChats, { id: prevChats?.length, name: newChat }];
			});
		}
	});

	const [messages, addMessage] = useState({}); // все сообщения по чатам (ключ id)
	const [messId, setMessId] = useState(0); // уникальный id для сообщений
	const { chatId } = useParams();

	let location = useLocation();

	const sendMessage = useCallback(
		(text, author) => {
			if (text) {
				addMessage((prevMess) => {
					// необходима проверка на случай, если ...prevMess[chatId] не существует
					if (prevMess[chatId]) {
						return {
							...prevMess,
							[chatId]: [...prevMess[chatId], { text: text, author: author, id: messId }],
						};
					} else {
						return {
							...prevMess,
							[chatId]: [{ text: text, author: author, id: messId }],
						};
					}
				});
				setMessId(messId + 1);
			}
		},
		[chatId, messId]
	);

	return (
		<>
			<Header />
			{location.pathname == "/profile" ? (
				<Profile />
			) : (
				<>
					<Chatlist chats={chats} sendChat={sendChat} />
					{
						// защита от добавлений сообщений если в url укажут не существующий id чата
						chatId in chats.map((chat) => chat.id) ? <Messagefield messages={messages[chatId]} sendMessage={sendMessage} /> : <div className="messagefield">Выберите чат</div>
					}
				</>
			)}
		</>
	);
}
