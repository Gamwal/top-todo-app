import "./style.css";
import { displayUI, resetTab, highlightTab, resetProjTab } from "./modules/ui";
import { createNewTaskDialog, createNewProjDialog } from "./modules/dialog";
import { createDummyTodos } from "./modules/dummyTasks";
import { displayAllTodos, updateDisplay } from "./modules/mainDisplay";
import Project from "./modules/project";
import TodoItem from "./modules/todo";

displayUI();

const sideBarNav = document.getElementsByClassName("side-bar-item");
Array.from(sideBarNav).forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.currentTarget.tagName === "BUTTON") {
      if (event.currentTarget.id === "add-task-btn") {
        createNewTaskDialog();
      } else {
        resetTab();
        highlightTab(event.currentTarget);
      }
    }
  });
});

const projectsDivNav = document.getElementById("add-new-project");
projectsDivNav.addEventListener("click", (event) => {
    createNewProjDialog();
});

window.addEventListener("load", () => {
  // localStorage.clear();
  // createDummyTodos();
  TodoItem.initializeTodos();
  Project.loadProjectList();
  Project.saveProjectList();

  displayAllTodos();
  const homeButton = document.querySelector("#filters-div button:nth-child(2)");
  if (homeButton) {
    homeButton.click();
  }
  const defaultProjectBtn = document.querySelector("#projects-list-div button:first-child");
  if (defaultProjectBtn) {
    defaultProjectBtn.click();
  }
});