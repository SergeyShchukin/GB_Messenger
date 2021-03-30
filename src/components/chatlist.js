import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Chatlist() {
    const chatlist = ["Чат 1","Чат 2","Чат 3","Чат 4","Чат 5"];
    return (
        <div className="chatlist">
            <ListGroup as="ul" defaultActiveKey="#link0">
                {chatlist.map( (chat, i) => <ListGroup.Item as="li" key={i} href={`#link${i}`}>{chat}</ListGroup.Item> )}
            </ListGroup>
        </div>
    );
};