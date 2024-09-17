class FilterVariables {
  static currentTodoFilter = "All";
  static currentProjectFilter = "Default";
}


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
  newItem.name = name;

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
  newItem.name = name;

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

  const projectListDiv = document.createElement('div');
  projectListDiv.id = "projects-list-div";

  const newProject = createProjectItem("New Project");
  newProject.id = "add-new-project";

  projectsDiv.appendChild(newProject);
  projectsDiv.appendChild(projectListDiv);
  
  return projectsDiv;
}

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

function highlightTab(button) {
  button.classList.add("active-tab");
}

function resetTab() {
  const navButtons = document.querySelectorAll("#filters-div button");
  navButtons.forEach((button) => {
    button.classList.remove("active-tab");
  });
}

function resetProjTab() {
  const navButtons = document.querySelectorAll("#projects-list-div button");
  navButtons.forEach((button) => {
    button.classList.remove("active-tab");
  });
}

export { displayUI, highlightTab, resetTab, resetProjTab, createProjectItem, FilterVariables };