import { createTodosMainDiv, displayAllTodos } from "./mainDisplay";


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

  createTodosMainDiv();
}

function createFiltersDiv() {
  const filters = document.createElement("div");
  filters.id = "filters-div";

  const newTask = createNewSideBarItem("New task");
  newTask.id = "add-task-btn";

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

function createProjectItem(name) {
  const newItem = document.createElement("button");
  newItem.classList.add("project-div-item");

  const itemIcon = document.createElement("div");
  itemIcon.classList.add("project-icons");

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
  title.style.fontSize = "2rem";

  const newProject = createNewSideBarItem("New Project");
  newProject.id = "add-new-project";

  const defaultProject = createNewSideBarItem("default");

  projectsDiv.appendChild(title);
  projectsDiv.appendChild(newProject);
  projectsDiv.appendChild(defaultProject);

  return projectsDiv;
}

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
