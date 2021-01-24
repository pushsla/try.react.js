import React from 'react';
import TaskContainer from "./datatypes/TaskContainer";
import {TaskContainerContext} from "./contexts/TaskContainerContext";
import Task, {TaskPropsPartial} from "./datatypes/Task";
import Menu from "./components/Menu/Menu";
import Graph from "./components/Graph/Graph";

import "./App.sass";

class App extends React.Component{
  addTask = (task: Task) => {
    const newtasks = this.state.context.tasks;
    newtasks.addTask(task);

    this.setState({
      tasks: newtasks
    });
  }

  removeTask = (id: number) => {
    const newtasks = this.state.context.tasks;
    newtasks.removeTask(id);

    this.setState({
      tasks: newtasks
    });
  }

  setTaskProps = (id: number, props: TaskPropsPartial) => {
    const newtasks = this.state.context.tasks;
    newtasks.setTaskProps(id, props);

    this.setState({
      tasks: newtasks
    });
  }

  state = {
    context: {
      tasks: new TaskContainer("Tasks"),
      addTask: this.addTask,
      removeTask: this.removeTask,
      setTaskProps: this.setTaskProps,
    }
  }

  render()
  {
    return (
        <TaskContainerContext.Provider value={this.state.context}>
          <main className="App">
            <Menu/>
            <Graph/>
          </main>
        </TaskContainerContext.Provider>
    );
  }
}

export default App;
