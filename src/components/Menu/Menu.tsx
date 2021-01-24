import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";

import {TaskContainerContext} from "../../contexts/TaskContainerContext";

import "./Menu.sass";
import Entry from "./Entry";
import Task from "../../datatypes/Task";
import TaskContainer from "../../datatypes/TaskContainer";

export interface MenuProps
    extends React.HTMLAttributes<HTMLUListElement>{

}

export default function Menu({...other}: MenuProps){
    const [currentTaskName, setCurrentTaskName] = useState("");

    const onAddButtonClick = (e: React.MouseEvent<HTMLButtonElement>, add_function: any) => {
        e.preventDefault();
        if (currentTaskName !== "") {
            add_function(new Task(0, 10, currentTaskName, "#999"));
        }
    }

    const onDelButtonClick = (e: React.MouseEvent<HTMLButtonElement>, del_function: any, id: number) => {
        e.preventDefault();
        del_function(id);
    }

    const onAddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTaskName(e.target.value);
    }

    const onEntryColorClick = (e: React.MouseEvent<HTMLButtonElement>, set_function: any, id: number) => {
        const newcolor = prompt("New color:");
        set_function(id, {taskColor: newcolor});
    }

    return(
        <TaskContainerContext.Consumer>
            {context => (
                <div className="Menu">
                    <form action="" className="Menu__form">
                        <Input onChange={onAddInputChange}/>
                        <Button onClick={(e) => onAddButtonClick(e, context.addTask)}>+</Button>
                    </form>
                    <ul {...other} className="Menu__list">
                        {context.tasks.state.container.map((task, i) => (
                            <li key={`index:${i}id:${task.state.id}`}>
                                <Entry task={task} onColorClick={
                                    (e: React.MouseEvent<HTMLButtonElement>) => onEntryColorClick(e, context.setTaskProps, task.state.id)
                                }>
                                    <Button className="Entry__Button" onClick={(e) =>
                                        onDelButtonClick(e, context.removeTask, task.state.id)
                                    }>-</Button>
                                </Entry>
                            </li>
                        ))}
                        {context.tasks.state.container.length === 0 && <span className="Menu__list_placeholder">There are no tasks yet</span>}
                    </ul>
                </div>
            )}
        </TaskContainerContext.Consumer>
    );
}