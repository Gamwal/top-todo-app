import './style.css';
// import TodoItem from '.modules/todo';
// import Project from './project';
// import { createNewProject, createNewTodo } from './utils';
import { displayUI, resetTab, highlightTab } from './modules/tabControl';


displayUI();



function taskUIElement(title) {
  const taskItem = document.createElement('div');
  taskItem.classList.add("todo-item");

  const taskCheck = document.createElement('input');
  taskCheck.type = "checkbox";

  const taskTitle = document.createElement('div');
  taskTitle.classList.add("task-title");

  function truncateTitle(name) {
    const LENGTH = 25;
    const lengthOfTitle = name.length;
    if (lengthOfTitle >= LENGTH) {
      return `${name.substring(0, LENGTH)}...`
    }
    return name;
  }
  
  const newTitle = truncateTitle(title);

  taskTitle.textContent = `${newTitle}`;


  const taskStatus = document.createElement('div');
  taskStatus.textContent = "not due";

  const taskEditButton = document.createElement('button');
  taskEditButton.classList.add('edit-btn');

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.classList.add("delete-btn");


  taskItem.appendChild(taskCheck);
  taskItem.appendChild(taskTitle);
  taskItem.appendChild(taskStatus);
  taskItem.appendChild(taskEditButton);
  taskItem.appendChild(taskDeleteButton);

  return taskItem;
}

function addTaskToDisplay(title) {
  const task = taskUIElement(title);
  const taskHolder = document.getElementById("todo-holder");
  taskHolder.appendChild(task);
}

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
    addTaskToDisplay(newTask.value);
    // console.log(newTask.value);
    newTask.value = "";
  }
})


window.addEventListener('load', () => {
  const homeButton = document.querySelector('#nav-bar button:first-child');
  homeButton.click();
})


