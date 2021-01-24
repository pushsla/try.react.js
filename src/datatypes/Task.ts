
export interface TaskProps{
    id: number,
    startTime: number,
    stopTime: number,
    taskName: string,
    taskColor: string,
    taskFinished: boolean,
}

export interface TaskPropsPartial{
    startTime?: number,
    stopTime?: number,
    taskName?: string,
    taskColor?: string,
    taskFinished?: boolean,
}

export default class Task{
    state: TaskProps;

    constructor(start_time: number, stop_time: number, name: string, color: string){
        this.state = {
            id: -1,
            startTime:      start_time,
            stopTime:       stop_time,
            taskName:       name,
            taskColor:      color,
            taskFinished:   false,
        };
    }
}