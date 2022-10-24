import React from "react"
import './ListStyles.css';
export const List = (props) => {
    const { text } = props;
    return (
        <div>
            <input type='checkbox' />
            <div>{text}</div>
            <button>Delete</button>
        </div>
    )
}