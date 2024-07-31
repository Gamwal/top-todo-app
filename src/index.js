import './style.css';
// import TodoItem from '.modules/todo';
// import Project from './project';
// import { createNewProject, createNewTodo } from './utils';
import { displayUI, resetTab, highlightTab } from './modules/tabControl';


displayUI();

const navBar = document.getElementById('nav-bar');
navBar.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    resetTab();
    highlightTab(event.target);
    if (event.target.textContent === 'ALL') {
      // contentContainer.appendChild(homePage());
    } else if (event.target.textContent === 'ACTIVE') {
      // contentContainer.appendChild(restaurantMenu());
    } else if (event.target.textContent === 'COMPLETED') {
      // contentContainer.appendChild(contactUs());
    }
  }
})

const newTask = document.getElementById('task-input');
const addTask = document.getElementById('add-task-btn');
addTask.addEventListener('click', (event) => {
  if (newTask.value !== "") {
    console.log(newTask.value)
    newTask.value = "";
  }
})


window.addEventListener('load', () => {
  const homeButton = document.querySelector('#nav-bar button:first-child');
  homeButton.click();
})


