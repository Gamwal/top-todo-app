import TodoItem from "./todo";

function createTodosMainDiv() {
  const main = document.getElementById("main");

  const todoListDisplay = document.createElement('div');
  todoListDisplay.id = "todo-list-display";

  const completedSection = document.createElement('div');
  completedSection.id = "completed-section";
  const completedTitle = document.createElement('h1');
  completedTitle.textContent = "Completed";
  const completedListArea = document.createElement('div');

  completedSection.appendChild(completedTitle);
  completedSection.appendChild(completedListArea);

  const uncompletedSection = document.createElement('div');
  uncompletedSection.id = "ongoing-section";
  const uncompletedTitle = document.createElement('h1');
  uncompletedTitle.textContent = "Ongoing";
  const uncompletedListArea = document.createElement('div');

  uncompletedSection.appendChild(uncompletedTitle);
  uncompletedSection.appendChild(uncompletedListArea);

  todoListDisplay.appendChild(uncompletedSection);
  todoListDisplay.appendChild(completedSection);
  
  main.appendChild(todoListDisplay);
}

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

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const todoItem = TodoItem.fromJSON(JSON.parse(value));
    
    if (todoItem.completed === false) {
      ongoingTodos.appendChild(singleTodo(todoItem));
    } else {
      completedTodos.appendChild(singleTodo(todoItem));
    }

    // console.log(`Key: ${key}, Value: `, todoItem);
  }
}

export { createTodosMainDiv, displayAllTodos }