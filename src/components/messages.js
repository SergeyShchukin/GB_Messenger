import React, { useState } from "react";

const Messages = () => {
    const [arrMessages, setState] = useState(["Привет!", "Как дела?"]);

    return (
        <>
            {arrMessages.map((text, index) => <div key={index}>{text}</div>)}
            <button onClick={() => setState(arrMessages => [...arrMessages, "Нормально"])}>Отправить сообщение</button>
        </>
    );
};

export default Messages;