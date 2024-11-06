// js/app.js
import { addTask } from './task.js';
import { renderTasks, clearInput } from './dom.js';

document.getElementById('add-task-btn').addEventListener('click', () => {
    const input = document.getElementById('task-input');
    const taskDescription = input.value.trim();
    if (taskDescription) {
        addTask(taskDescription);
        renderTasks();
        clearInput();
    }
});
