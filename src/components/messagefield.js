import React, { useState } from "react";
import Message from "./message";
import '../styles/styles.css';

const Messagefield = () => {
    const [message, setMessage] = useState();
    let newMessage = ""; // отправка через вспомогательную переменную, чтобы не рендерить при изменении переменной state в textarea

    return (
        <section className="discussion">
            <textarea className='messagefield' onChange={(ev) => newMessage = ev.target.value}></textarea>
            <button onClick={() => setMessage(prevMessage => prevMessage = newMessage)}>Отправить сообщение</button>
            <Message message={message} />
        </section>
    );
};

export default Messagefield;