import React from "react";
import "./style.css";

function Button(props) {
    
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }
    
    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
        );
}
export default Button;