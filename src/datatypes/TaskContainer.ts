import Task, {TaskProps, TaskPropsPartial} from "./Task";

export default class TaskContainer{
    state: {
        containerName: string,
        container: Task[],
        last_id: number,
        min_time: number,
        max_time: number
    }

    constructor(name: string){
        this.state = {
            containerName: name,
            container: [],
            last_id: 0,
            min_time: 0,
            max_time: 50
        }
    }

    addTask(task: Task){
        task.state.id = ++this.state.last_id;
        this.state.container.push(task);
        if (task.state.startTime < this.state.min_time){
            this.state.min_time = task.state.startTime - 5;
        }
        if (task.state.stopTime > this.state.max_time){
            this.state.max_time = task.state.stopTime + 5;
        }
    }

    removeTask(id: number){
        this.state.container = this.state.container.filter(task => (task.state.id !== id));
    }

    setTaskProps(id: number, props: TaskPropsPartial){
        const task = this.state.container.filter(task => (task.state.id === id))[0];
        if (task){
            Object.assign(task.state, props);
        }
    }
}