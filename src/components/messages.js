import React, { useState } from "react";

const Messages = () => {
    const [messages, setMessages] = useState(["Привет!", "Как дела?"]);

    return (
        <>
            <button onClick={() => setMessages(prevMessages => [...prevMessages, "Нормально"])}>Отправить сообщение</button>
            {messages.map((text, index) => <div key={index}>{text}</div>)}
        </>
    );
};

export default Messages;