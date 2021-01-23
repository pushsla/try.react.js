import React from 'react';
import TaskContainer from "./datatypes/TaskContainer";
import {TaskContainerContext} from "./contexts/TaskContainerContext";
import Task from "./datatypes/Task";
import Menu from "./components/Menu/Menu";
import Graph from "./components/Graph/Graph";

import "./App.sass";

class App extends React.Component{
  addTask = (task: Task) => {
    const newtasks = Object.assign(new TaskContainer("null"), this.state.tasks);
    newtasks.addTask(task);

    this.setState({
      tasks: newtasks
    });
  }

  removeTask = (id: number) => {
    const newtasks = Object.assign(new TaskContainer("null"), this.state.tasks);
    newtasks.removeTask(id);

    this.setState({
      tasks: newtasks
    });
  }

  state = {
    tasks: new TaskContainer("Tasks"),
    addTask: this.addTask,
    removeTask: this.removeTask
  }

  render()
  {
    return (
        <TaskContainerContext.Provider value={this.state}>
          <main className="App">
            <Menu/>
            <Graph/>
          </main>
        </TaskContainerContext.Provider>
    );
  }
}

export default App;
