import "./style.css";
import TodoItem from "./modules/todo";
import Project from "./modules/project";
import {
  displayUI,
  createNewTaskDialog,
  resetTab,
  highlightTab,
} from "./modules/ui";

displayUI();

// const newTodo = new TodoItem(
//   "Try to get this working",
//   "Just some random text"
// );

// localStorage.setItem(newTodo.checkUUID, newTodo.toJSON());

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
        const dialog = createNewTaskDialog();
        document.body.appendChild(dialog);
        dialog.style.display = "block";
        taskControlButtonsEvents(dialog);
      } else {
        resetTab();
        highlightTab(event.currentTarget);
      }
      // console.log(event.currentTarget);
    }
  });
});

function taskControlButtonsEvents(dialogbox) {
  const taskControlButtons = document.getElementsByClassName(
    "task-control-button"
  );
  Array.from(taskControlButtons).forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target.id === "done-button") {
        const form = dialogbox.querySelector("form");
        form.submit();
      }
      document.body.removeChild(dialogbox);
    });
  });
}

function createUserTodo(dialogbox) {
  const form = dialogbox.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskProject = form.querySelector("select").value;
    const taskTitle = form.querySelector("input[name='title']").value;
    const taskDetails = form.querySelector("input[name='details']").value;
    const taskDueDate = form.querySelector("input[name='dueDate']").value;

    console.log("Form submitted with data:");
    console.log("Project:", taskProject);
    console.log("Title:", taskTitle);
    console.log("Details:", taskDetails);
    console.log("Due Date:", taskDueDate);

    // Logic to handle the submitted data goes here

    // Optionally, close the dialog after handling the data
    document.body.removeChild(dialogbox);
  });
}

// window.addEventListener("load", () => {
//   const homeButton = document.querySelector("#nav-bar button:first-child");
//   homeButton.click();
// });
