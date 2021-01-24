import React from "react";
import {TaskContainerContext} from "../../contexts/TaskContainerContext";

import "./Graph.sass";

export interface GraphProps{

}

export default function Graph(){
    return(
        <div className="Graph">
            <TaskContainerContext.Consumer>
                {context => (
                    <table className="Graph__table">
                        <thead className="Graph__head">
                        <tr>
                            {Array.from(
                                {length: context.tasks.state.max_time - context.tasks.state.min_time + 1},
                                (_, i) => i).map((item, i) => (
                                <th className="Graph__cell Graph__cell_head" key={item}>{item}</th>
                            ))
                            }
                        </tr>
                        </thead>
                        <tbody className="Graph__body">
                        {context.tasks.state.container.map((task, i) => (
                            <tr className="Graph__row" key={task.state.id}>
                                {Array.from(
                                    {length: task.state.startTime - context.tasks.state.min_time + 1},
                                    (_, i) => i).map((item, i) => (
                                    <td key={`empty-${item}`}></td>
                                ))
                                }
                                <td
                                    className="Graph__cell Graph__cell_task"
                                    colSpan={task.state.stopTime - task.state.startTime}
                                    style={{background: task.state.taskColor}}
                                >{task.state.taskName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </TaskContainerContext.Consumer>
        </div>
    );
}