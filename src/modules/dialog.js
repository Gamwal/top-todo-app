import TodoItem from "./todo";
import Project from "./project";
import { updateDisplay, createProjectList } from "./mainDisplay";


function createNewTaskDialog() {
  const popupDialog = document.createElement("div");
  popupDialog.id = "popup-dialog";

  const dialog = document.createElement("div");
  dialog.id = "dialog";

  const dialogTitle = document.createElement("div");
  dialogTitle.textContent = "Add New Task";

  const form = document.createElement("form");
  form.id = "task-form";

  const dialogBody = document.createElement("div");
  dialogBody.id = "dialog-body";

  const taskProject = document.createElement("select");
  Object.keys(Project.PROJECTS).forEach((proj) => {
    const option = document.createElement("option");
    option.value = proj;
    option.textContent = proj;
    taskProject.appendChild(option);
  })

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
    const taskProject = form.querySelector("select").value;
    const taskTitle = form.querySelector("input[name='title']").value;
    const taskDetails = form.querySelector("input[name='details']").value;
    const taskDueDate = form.querySelector("input[name='dueDate']").value;

    // console.log("Form submitted with data:");
    // console.log("Project:", taskProject);
    // console.log("Title:", taskTitle);
    // console.log("Details:", taskDetails);
    // console.log("Due Date:", taskDueDate);

    // Logic to handle the submitted data goes here
    createNewTodo(taskTitle, taskDetails, taskDetails, taskDueDate, taskProject);

    console.log("Form submitted!");
    document.body.removeChild(popupDialog);
    content.classList.remove("blurred-background");
  });
}

function createNewTodo(title, description, notes, dueDate, project) {
  const task = new TodoItem(
    (title = title),
    (description = description),
    (dueDate = dueDate),
    (notes = notes),
    (project = project)
  );
  console.log(JSON.stringify(task));
  TodoItem.updateTodos(task);
  Project.updateProjectList(task.project)
  updateDisplay();
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
    Project.updateProjectList(form.querySelector("input[name='Project']").value)
    updateDisplay();
    createProjectList();

    // console.log("Form submitted!");
    document.body.removeChild(popupDialog);
    content.classList.remove("blurred-background");
  });
}

export { createNewTaskDialog, createNewProjDialog };