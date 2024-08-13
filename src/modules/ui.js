function displayUI() {
  const sideBar = document.createElement("div");
  sideBar.id = "sidebar";

  const main = document.createElement("div");
  main.id = "main";

  const content = document.getElementById("content");

  const upperSideBar = createFiltersDiv();

  const lowerSideBar = createProjectsDiv();

  sideBar.appendChild(upperSideBar);
  sideBar.appendChild(lowerSideBar);

  content.appendChild(sideBar);
  content.appendChild(main);
}

function createFiltersDiv() {
  const filters = document.createElement("div");
  filters.id = "filters-div";

  const newTask = createNewSideBarItem("New task");
  const allTasks = createNewSideBarItem("All");
  const upcomingTasks = createNewSideBarItem("Upcoming");
  const overdueTasks = createNewSideBarItem("Overdue");
  const thisWeekTasks = createNewSideBarItem("This week");
  const thisMonthTasks = createNewSideBarItem("This month");

  filters.appendChild(newTask);
  filters.appendChild(allTasks);
  filters.appendChild(upcomingTasks);
  filters.appendChild(overdueTasks);
  filters.appendChild(thisWeekTasks);
  filters.appendChild(thisMonthTasks);

  return filters;
}

function createNewSideBarItem(name) {
  const newItem = document.createElement("button");
  newItem.classList.add("side-bar-item");

  const itemIcon = document.createElement("div");
  itemIcon.classList.add("sidebar-icons");

  const itemName = document.createElement("div");
  itemName.textContent = name;

  newItem.appendChild(itemIcon);
  newItem.appendChild(itemName);

  return newItem;
}

function createProjectsDiv() {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projects-div";
  const title = document.createElement("div");
  title.textContent = "Projects";

  projectsDiv.appendChild(title);

  return projectsDiv;
}

// function createAddTaskDiv() {
//   const addTaskDiv = document.createElement("div");
//   addTaskDiv.id = "add-task-container";

//   const taskInput = document.createElement("input");
//   taskInput.id = "task-input";
//   taskInput.placeholder = "New task...";

//   const addTaskBtn = document.createElement("button");
//   addTaskBtn.id = "add-task-btn";
//   addTaskBtn.textContent = "ADD";

//   addTaskDiv.appendChild(taskInput);
//   addTaskDiv.appendChild(addTaskBtn);

//   return addTaskDiv;
// }

// function createNavBar() {
//   const navDiv = document.createElement("nav");
//   navDiv.id = "nav-bar";

//   const allButton = document.createElement("button");
//   allButton.classList.add("nav-button");
//   allButton.textContent = "ALL";

//   const activeButton = document.createElement("button");
//   activeButton.classList.add("nav-button");
//   activeButton.textContent = "ACTIVE";

//   const completedButton = document.createElement("button");
//   completedButton.classList.add("nav-button");
//   completedButton.textContent = "COMPLETED";

//   navDiv.appendChild(allButton);
//   navDiv.appendChild(activeButton);
//   navDiv.appendChild(completedButton);

//   return navDiv;
// }

// function createTodoHolder() {
//   const todoHolder = document.createElement("div");
//   todoHolder.id = "todo-holder";

//   return todoHolder;
// }

function highlightTab(button) {
  button.classList.add("active-tab");
}

function resetTab() {
  const navButtons = document.querySelectorAll("#filters-div button");
  navButtons.forEach((button) => {
    button.classList.remove("active-tab");
  });
}

export { displayUI, highlightTab, resetTab };
