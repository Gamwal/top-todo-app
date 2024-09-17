import TodoItem from "./todo";
import Project from "./project";
import { createProjectItem, resetProjTab, highlightTab, FilterVariables } from "./ui";


function singleTodo(todo) {
  const container = document.createElement('div');
  container.classList.add("todo-item");
  
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  checkbox.addEventListener('click', () => {
    todo.toggleComplete();
    TodoItem.updateTodos(todo);
    updateDisplay();
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

function updateDisplay(todoFilter=FilterVariables.currentTodoFilter, projectFilter=FilterVariables.currentProjectFilter) {
  const ongoingTodos = document.querySelector("#ongoing-section > div");
  const completedTodos = document.querySelector("#completed-section > div");

  ongoingTodos.textContent = "";
  completedTodos.textContent = "";

  let todos = Object.values(TodoItem.todos).filter(item => item.project === projectFilter);

  // console.log(todos);
  // console.log(todoFilter)
  // console.log(projectFilter)
  
  if (todoFilter === "Upcoming") {
    todos = Object.values(todos).filter(item => {
      const dueDate = new Date(item.dueDate);
      const timeDifference = dueDate - new Date();
      console.log(timeDifference)
      return timeDifference >= 0 && timeDifference <= 2 * 24 * 60 * 60 * 1000;  // Convert 2 days to milliseconds and check if dueDate is within that range
    })
  } else if (todoFilter === "Overdue") {
    todos = Object.values(todos).filter(item => {
      const dueDate = new Date(item.dueDate);
      const timeDifference = dueDate - new Date();
      return timeDifference < 0 
    })
  } else if (todoFilter === "This week") {
    const now = new Date();
    
    // Get the start of the week (Monday)
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    startOfWeek.setHours(0, 0, 0, 0); // Set time to midnight
  
    // Get the end of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999); // End of the day
  
    todos = Object.values(todos).filter(item => {
      const dueDate = new Date(item.dueDate);
      return dueDate >= startOfWeek && dueDate <= endOfWeek;
    });
  } else if (todoFilter === "This month") {
    const now = new Date();
    
    // Get the start of the month (1st day)
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    startOfMonth.setHours(0, 0, 0, 0); // Set time to midnight
  
    // Get the end of the month (last day)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999); // End of the day
  
    todos = Object.values(todos).filter(item => {
      const dueDate = new Date(item.dueDate);
      return dueDate >= startOfMonth && dueDate <= endOfMonth;
    });
  }

  for (const [UUID, todoObject] of Object.entries(todos)) {
    if (!todoObject.completed) {
      ongoingTodos.appendChild(singleTodo(todoObject));
    } else {
      completedTodos.appendChild(singleTodo(todoObject));
    }
  }
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
        FilterVariables.currentProjectFilter = event.currentTarget.name;
        updateDisplay()
      }
    });
    projectsList.appendChild(newProj)
  });
  const defaultProjectBtn = document.querySelector("#projects-list-div button:last-child");
  if (defaultProjectBtn) {
    defaultProjectBtn.click();
  }
}

export { updateDisplay, createProjectList }