import React from "react";
import {AUTHORS} from "../utils/constants";
import '../styles/styles.css';

export default function Message ({text, author}) {
    return (
        <div className={`message ${(author == AUTHORS.user) ? "sender" : "recipient"}`}>
            <div>{text}</div>
            <div className='author'>{author}</div>
        </div>
    )
};