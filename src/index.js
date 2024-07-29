import './style.css';
// import TodoItem from './todo';
// import Project from './project';
// import { createNewProject, createNewTodo } from './utils';

const container = document.getElementById('content');

const addTaskDiv = document.createElement('div');
addTaskDiv.id = "add-task-container";

const taskInput = document.createElement('input');
taskInput.id = "task-input";
taskInput.placeholder = "New task...";

const addTaskBtn = document.createElement('button');
addTaskBtn.id = "add-task-btn";
addTaskBtn.textContent = "ADD";

addTaskDiv.appendChild(taskInput);
addTaskDiv.appendChild(addTaskBtn);




container.appendChild(addTaskDiv);