function createAddTaskDiv() {
  const addTaskDiv = document.createElement('div');
  addTaskDiv.id = "add-task-container";

  const taskInput = document.createElement('input');
  taskInput.id = "task-input";
  taskInput.placeholder = "New task...";

  const addTaskBtn = document.createElement('button');
  addTaskBtn.id = "add-task-btn";
  addTaskBtn.textContent = "ADD";

  addTaskDiv.appendChild(taskInput);
  addTaskDiv.appendChild(addTaskBtn);

  return addTaskDiv;
}


function createNavBar() {
  const navDiv = document.createElement('nav');
  navDiv.id = "nav-bar";

  const allButton = document.createElement('button');
  allButton.classList.add("nav-button");
  allButton.textContent = "ALL";

  const activeButton = document.createElement('button');
  activeButton.classList.add("nav-button");
  activeButton.textContent = "ACTIVE";

  const completedButton = document.createElement('button');
  completedButton.classList.add("nav-button");
  completedButton.textContent = "COMPLETED";

  navDiv.appendChild(allButton);
  navDiv.appendChild(activeButton);
  navDiv.appendChild(completedButton);

  return navDiv;
}


function displayUI() {
  const container = document.getElementById('content');
  const addTaskDiv = createAddTaskDiv();
  const navDiv = createNavBar();

  container.appendChild(addTaskDiv);
  container.appendChild(navDiv);
}


function highlightTab(button) {
  button.classList.add('active-tab');
}


function resetTab(){
  const navButtons = document.querySelectorAll('#nav-bar button');
  navButtons.forEach(button => {
    button.classList.remove('active-tab');
  });
}


export { displayUI, highlightTab, resetTab };