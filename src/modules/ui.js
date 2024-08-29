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

function createProjectsDiv() {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projects-div";
  const title = document.createElement("div");
  title.textContent = "Projects";

  projectsDiv.appendChild(title);

  return projectsDiv;
}

function createNewTaskDialog() {
  const popupDialog = document.createElement("div");
  popupDialog.id = "popup-dialog";

  const dialog = document.createElement("div");
  dialog.id = "dialog";

  const dialogTitle = document.createElement("div");
  dialogTitle.textContent = "New Task";

  const form = document.createElement("form");
  form.id = "task-form";

  const dialogBody = document.createElement("div");
  dialogBody.id = "dialog-body";

  const taskProject = document.createElement("select");

  const taskTitle = document.createElement("input");
  taskTitle.placeholder = "Title";
  taskTitle.name = "title";

  const taskDetails = document.createElement("input");
  taskDetails.placeholder = "Notes";
  taskDetails.name = "details";

  const taskDueDate = document.createElement("input");
  taskDueDate.type = "date";
  taskDueDate.name = "dueDate";

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

  dialogBody.appendChild(taskProject);
  dialogBody.appendChild(taskTitle);
  dialogBody.appendChild(taskDetails);
  dialogBody.appendChild(taskDueDate);

  form.appendChild(dialogBody);
  form.appendChild(dialogControl);

  dialog.appendChild(dialogTitle);
  dialog.appendChild(form);

  popupDialog.appendChild(dialog);

  return popupDialog;
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

export { displayUI, createNewTaskDialog, highlightTab, resetTab };
