import "./style.css";
import { displayUI, resetTab, highlightTab } from "./modules/ui";
import { createNewTaskDialog } from "./modules/dialog";
import { createDummyTodos } from "./modules/dummyTasks";
import TodoItem from "./modules/todo";
import { displayAllTodos } from "./modules/mainDisplay";

displayUI();

function taskUIElement(title) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("todo-item");

  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = `${title}`;

  const taskStatus = document.createElement("div");
  taskStatus.id = "task-status";
  taskStatus.textContent = "not due";

  const taskEditButton = document.createElement("button");
  taskEditButton.classList.add("edit-btn");

  const taskDeleteButton = document.createElement("button");
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

const sideBarNav = document.getElementsByClassName("side-bar-item");
Array.from(sideBarNav).forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.currentTarget.tagName === "BUTTON") {
      if (event.currentTarget.id === "add-task-btn") {
        createNewTaskDialog();
      } else {
        resetTab();
        highlightTab(event.currentTarget);
      }
    }
  });
});

window.addEventListener("load", () => {
  // localStorage.clear();
  // createDummyTodos();
  displayAllTodos();
  const homeButton = document.querySelector("#filters-div button:nth-child(2)");
  if (homeButton) {
    homeButton.click();
  }
});
