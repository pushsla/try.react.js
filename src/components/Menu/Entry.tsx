import React from "react";

import "./Entry.sass";

export interface EntryProps{
    color: string,
    name: string,
    children: React.ReactNode
}

export default function Entry({color, name, children}: EntryProps){
    const entryStyle = {
        background: color
    }

    return(
        <div className="Menu__Entry">
            <button className="Entry__color" style={entryStyle}> </button>
            <span className="Entry__name">{name}</span>
            {children}
        </div>
    );
}