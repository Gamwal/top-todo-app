import "./style.css";
import { displayUI, resetTab, highlightTab, resetProjTab } from "./modules/ui";
import { createNewTaskDialog } from "./modules/dialog";
import { createDummyTodos } from "./modules/dummyTasks";
import { displayAllTodos } from "./modules/mainDisplay";
import { getProjectList } from "./modules/todo";

displayUI();
getProjectList();

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

const projectsDivNav = document.getElementsByClassName("project-div-item");
Array.from(projectsDivNav).forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.currentTarget.tagName === "BUTTON") {
      if (event.currentTarget.id === "add-new-project") {
        // createNewProjDialog();
      } else {
        resetProjTab();
        highlightTab(event.currentTarget);
      }
    }
  });
});


window.addEventListener("load", () => {
  // localStorage.clear();
  // createDummyTodos();
  displayAllTodos();
  const homeButton = document.querySelector("#filters-div button:nth-child(2)");
  if (homeButton) {
    homeButton.click();
  }
  const defaultProjectBtn = document.querySelector("#projects-div button:nth-child(2)");
  if (defaultProjectBtn) {
    defaultProjectBtn.click();
  }

});
