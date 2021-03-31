import React, { useState, useEffect, useRef, useCallback } from "react";
import { AUTHORS } from "../utils/constants";
import Message from "./message";
import Textaera from "./textaera";

export default function Messagefield() {
    const [messages, addMessage] = useState([]);
    const messagesEndRef = useRef(null); // ссылка для прокрутки на последнее сообщение

    const sendMessage = useCallback( (text, author) => {
        if (text)
            addMessage((prevMess) => [...prevMess, {text: text, author: author}]);
    }, []);

    useEffect(() => {
        const lastMessage = messages[messages.length-1];
        let timeout;

        if (lastMessage?.author == AUTHORS.user) {
            timeout = setTimeout(() => {
                sendMessage("Напиши мне что-то интереснее...", AUTHORS.BOT);
            }, 1000);
        }
        messagesEndRef.current.scrollIntoView();

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className='messagefield'>
            <div className='messages'>
                { messages.map(({text, author}, i) => <Message text={text} author={author} key={i} />) }
                <div ref={messagesEndRef} />
            </div>
            <Textaera onSendMessage={sendMessage}/>
        </div>
    );
};