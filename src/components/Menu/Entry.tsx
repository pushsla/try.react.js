import React from "react";

import "./Entry.sass";
import Task from "../../datatypes/Task";

export interface EntryProps{
    task: Task,
    onColorClick?: any,
    children: React.ReactNode,
}

export default function Entry({task, onColorClick, children}: EntryProps){
    const entryStyle = {
        background: task.state.taskColor
    }

    const onButtonColorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onColorClick && onColorClick(e);
    }

    return(
        <div className="Menu__Entry">
            <button className="Entry__color" onClick={onButtonColorClick} style={entryStyle}> </button>
            <span className="Entry__name">{task.state.taskName}</span>
            {children}
        </div>
    );
}