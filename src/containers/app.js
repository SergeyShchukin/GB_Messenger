import React from "react";
import { useParams } from "react-router-dom";
import Chatlist from "./chatlist";
import Messagefield from "./messagefield";
import { useSelector } from "react-redux";

export default function App() {
	const chats = useSelector((state) => state.chats);
	const { chatId } = useParams();

	return (
		<>
			<Chatlist />
			{
				// защита от добавлений сообщений если в url укажут не существующий id чата
				chats.map((chat) => chat.id).indexOf(chatId) != -1 ? <Messagefield /> : <div className="messagefield">Выберите чат</div>
			}
		</>
	);
}
