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


const navDiv = document.createElement('nav');
navDiv.id = "nav-bar";

const allButton = document.createElement('button');
allButton.classList.add("nav-button");
allButton.textContent = "ALL";

const activeButton = document.createElement('button');
activeButton.classList.add("nav-button");
activeButton.textContent = "ACTIVE";

const completedButton = document.createElement('button');
completedButton.classList.add("nav-button");
completedButton.textContent = "COMPLETED";

navDiv.appendChild(allButton);
navDiv.appendChild(activeButton);
navDiv.appendChild(completedButton);
container.appendChild(navDiv);


// const navBar= document.getElementById('navbar');
// navBar.addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     resetPage();
//     highlightTab(event.target);
//     if (event.target.textContent === 'HOME'){
//       contentContainer.appendChild(homePage());
//     } else if (event.target.textContent === 'MENU') {
//       contentContainer.appendChild(restaurantMenu());
//     } else if (event.target.textContent === 'CONTACT US') {
//       contentContainer.appendChild(contactUs());
//     }
//   }
// })


// To load homepage by default
// window.addEventListener('load', () => {
//   const homeButton = document.querySelector('#navbar button:first-child');
//   homeButton.click();
// })