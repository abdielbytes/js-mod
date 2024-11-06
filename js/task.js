// js/task.js
export class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

export const taskList = [];

export function addTask(description) {
    const task = new Task(description);
    taskList.push(task);
    return task;
}

export function removeTask(index) {
    taskList.splice(index, 1);
}
