import { createTodosMainDiv, displayAllTodos } from "./mainDisplay";
import { getProjectList } from "./todo";

const PROJECTS = getProjectList();
console.log(PROJECTS);

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

  const newProject = createProjectItem("New Project");
  newProject.id = "add-new-project";

  newProject.addEventListener('click', (event) => {
    createNewProjDialog();
  })

  const defaultProject = createProjectItem("Default");

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

function resetProjTab() {
  const navButtons = document.querySelectorAll("#projects-div button");
  navButtons.forEach((button) => {
    button.classList.remove("active-tab");
  });
}

function createNewProjDialog() {
  const popupDialog = document.createElement("div");
  popupDialog.id = "popup-dialog";

  const dialog = document.createElement("div");
  dialog.id = "dialog";

  const dialogTitle = document.createElement("div");
  dialogTitle.textContent = "Create New Project";

  const form = document.createElement("form");
  form.id = "task-form";

  const dialogBody = document.createElement("div");
  dialogBody.id = "dialog-body";

  const taskTitle = document.createElement("input");
  taskTitle.placeholder = "Project Name";
  taskTitle.name = "Project";

  const dialogControl = document.createElement("div");

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("task-control-button");
  cancelButton.id = "cancel-button";
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";

  const doneButton = document.createElement("button");
  doneButton.classList.add("task-control-button");
  doneButton.id = "done-button";
  doneButton.type = "submit";
  doneButton.textContent = "Done";

  dialogControl.appendChild(cancelButton);
  dialogControl.appendChild(doneButton);

  dialogBody.appendChild(taskTitle);

  form.appendChild(dialogBody);
  form.appendChild(dialogControl);

  dialog.appendChild(dialogTitle);
  dialog.appendChild(form);

  popupDialog.appendChild(dialog);

  const content = document.querySelector("#content");

  content.classList.add("blurred-background");

  document.body.appendChild(popupDialog);

  cancelButton.addEventListener("click", () => {
    document.body.removeChild(popupDialog);
    content.classList.remove("blurred-background");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Handle form data here
    PROJECTS.push(form.querySelector("input[name='Project']").value);
    const projectListDiv = document.querySelector("#projects-div");
    const newProj = createProjectItem(form.querySelector("input[name='Project']").value)
    projectListDiv.appendChild(newProj);
    console.log(PROJECTS);

    console.log("Form submitted!");
    document.body.removeChild(popupDialog);
    content.classList.remove("blurred-background");
  });
}

export { displayUI, highlightTab, resetTab, resetProjTab };
