import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Chatlist from "./chatlist";
import Messagefield from "./messagefield";
import Header from "./header";

export default function App() {
	const [chats, addChat] = useState([]); // массив чатов id и названия
	const sendChat = useCallback((newChat) => {
		if (newChat) {
			addChat((prevChats) => {
				return [...prevChats, { id: "chatId" + prevChats?.length, name: newChat }];
			});
		}
	});

	const [messages, addMessage] = useState({}); // все сообщения по чатам (ключ id)
	const { chatId } = useParams();

	const sendMessage = useCallback(
		(text, author) => {
			if (text) {
				addMessage((prevMess) => {
					// необходима проверка на случай, если ...prevMess[chatId] не существует
					if (prevMess[chatId]) {
						return {
							...prevMess,
							[chatId]: [...prevMess[chatId], { text: text, author: author, id: chatId + "_" + prevMess[chatId]?.length }],
						};
					} else {
						return {
							...prevMess,
							[chatId]: [{ text: text, author: author, id: chatId + "_" + 0 }],
						};
					}
				});
			}
		},
		[chatId]
	);

	return (
		<>
			<Header pageName={chats.filter((chat) => chat.id == chatId)[0]?.name} />
			<Chatlist chats={chats} sendChat={sendChat} />
			{
				// защита от добавлений сообщений если в url укажут не существующий id чата
				chats.map((chat) => chat.id).indexOf(chatId) != -1 ? <Messagefield messages={messages[chatId]} sendMessage={sendMessage} /> : <div className="messagefield">Выберите чат</div>
			}
		</>
	);
}
