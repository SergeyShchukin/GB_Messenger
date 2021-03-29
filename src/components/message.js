import React, { useState, useEffect } from "react";
import {AUTHORS} from "../utils/constants";
import '../styles/styles.css';

const Message = ({ message }) => {
    const [messages, setMessages] = useState([]);
    let classAutor;

    useEffect(() => { 
        if (message) {
            setMessages((prevMess) => [...prevMess, { text: message, author: AUTHORS.user }]);
            
            setTimeout(() => {
                setMessages((prevMess) => [...prevMess, { text: "Напиши мне что-то интереснее...", author: AUTHORS.BOT }])
            }, 1000);
        }
    }, [message]);

    return (
        messages.map((mess, index) => {
            return <div className={`message ${(mess.author == AUTHORS.user) ? "sender" : "recipient"}`} key={index}>
                <div className='text'>{mess.text}</div>
                <div className='author'>{mess.author}</div>
            </div>
        })
    );
};

export default Message;