import TaskContainer from "../datatypes/TaskContainer";
import React from "react";
import Task from "../datatypes/Task";

export const TaskContainerContext = React.createContext({
  tasks: new TaskContainer("Taskcontainer"),
  addTask: (task: Task) => {},
  removeTask: (id: number) => {},
});