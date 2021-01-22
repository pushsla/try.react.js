import React from "react";
import { useState } from "react";

import "./Button.sass";

export default function Button({displayText, onClick}: {displayText: string, onClick?: any}){
    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick && onClick();
    }

    return(
        <button className="Button" onClick={onButtonClick}>{displayText}</button>
    );
}
