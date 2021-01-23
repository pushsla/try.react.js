import Task from "./Task";

export default class TaskContainer{
    state: {
        containerName: string,
        container: Task[],
        last_id: 0
    }

    constructor(name: string){
        this.state = {
            containerName: name,
            container: [],
            last_id: 0
        }
    }

    addTask(task: Task){
        task.state.id = ++this.state.last_id;
        this.state.container.push(task);
    }

    removeTask(id: number){
        this.state.container = this.state.container.filter(task => (task.state.id !== id));
    }
}