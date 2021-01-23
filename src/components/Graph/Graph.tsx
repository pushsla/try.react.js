import React from "react";
import {TaskContainerContext} from "../../contexts/TaskContainerContext";


export interface GraphProps{

}

export default function Graph(){
    return(
      <TaskContainerContext.Consumer>
          {context => (
              <div className="Graph">
                  {context.tasks.state.container.map((task, i) => (
                      <h4 key={i}>{task.state.taskName}</h4>
                  ))}
              </div>
          )}
      </TaskContainerContext.Consumer>
    );
}