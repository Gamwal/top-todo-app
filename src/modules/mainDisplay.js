import TodoItem from "./todo";
import Project from "./project";
import { createProjectItem } from "./ui";
import { resetProjTab, highlightTab } from "./ui";


function singleTodo(todo) {
  const container = document.createElement('div');
  container.classList.add("todo-item");
  
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  checkbox.addEventListener('click', (event) => {
    todo.toggleComplete();
    displayAllTodos();
  })
  
  const todoTitle = document.createElement('div');
  todoTitle.textContent = todo.title;

  const todoStatus = document.createElement('div');
  todoStatus.textContent = todo.status;
  
  const editButton = document.createElement('button');
  editButton.classList.add("edit-btn");
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add("delete-btn")

  container.appendChild(checkbox);
  container.appendChild(todoTitle);
  container.appendChild(todoStatus);
  container.appendChild(editButton);
  container.appendChild(deleteButton);

  return container;
}

function displayAllTodos() {
  const ongoingTodos = document.querySelector("#ongoing-section > div");
  const completedTodos = document.querySelector("#completed-section > div");
  
  ongoingTodos.textContent = "";
  completedTodos.textContent = "";

  const todos = TodoItem.getTodos();

  for (const [UUID, todoObject] of Object.entries(todos)) {
    if (!todoObject.completed) {
      ongoingTodos.appendChild(singleTodo(todoObject));
    } else {
      completedTodos.appendChild(singleTodo(todoObject));
    }
  }
  updateDisplay();
  createProjectList();
}

function updateDisplay(todoFilter="All", projectFilter="Default") {
  const newTodo = Object.values(TodoItem.todos).filter(item => item.project === projectFilter);

  console.log(newTodo)
  
  if (todoFilter === "All") {}

  createProjectList();
}

function createProjectList() {
  const projectsList = document.querySelector("#projects-list-div");
  projectsList.textContent = "";

  Object.keys(Project.PROJECTS).forEach((proj) => {
    const newProj = createProjectItem(proj);
    newProj.addEventListener('click', (event) => {
      if (event.currentTarget.tagName === "BUTTON") {
        resetProjTab();
        highlightTab(event.currentTarget);
      }
    });
    projectsList.appendChild(newProj)
  });
  const defaultProjectBtn = document.querySelector("#projects-list-div button:last-child");
  if (defaultProjectBtn) {
    defaultProjectBtn.click();
  }
}

export { displayAllTodos, updateDisplay }