import { taskList } from './task.js';

export function renderTasks() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.description;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeTaskFromDOM(index));
        listItem.appendChild(deleteButton);
        taskListElement.appendChild(listItem);
    });
}

export function clearInput() {
    document.getElementById('task-input').value = '';
}

function removeTaskFromDOM(index) {
    taskList.splice(index, 1);
    renderTasks();
}
