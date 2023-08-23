import createAddTaskForm from "../components/addTaskForm/addTaskForm";
import {
  removeAddTaskFormContent,
  removeAddProjectForm,
  clearMainContent,
} from "./clearContent";
import { addTaskToTodoListArray } from "./addTask";
import { sortTasks } from "./sortTasksByDueDate";
import addProjectForm from "../components/addProjectForm/addProjectForm";
import { addProjectsToArray, projects } from "./addProject";
import createCustomProject from "../components/customProjectsSection/createCustomProject";

let isFormOpen = false;

function attachEventListenersForAddTaskForm() {
  const plusIcon = document.querySelector(".main-plus-icon");

  plusIcon.addEventListener("click", () => {
    if (isFormOpen) {
      return;
    }

    createAddTaskForm();
    isFormOpen = true;

    const exitIcon = document.querySelector(".form-img");

    exitIcon.addEventListener("click", () => {
      removeAddTaskFormContent();
      isFormOpen = false;
    });
    const formBtn = document.querySelector(".form-btn");
    formBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addTaskToTodoListArray();
      sortTasks();
    });
  });
}

function attachEventListenersForAddProjectForm() {
  const projectPlusIcon = document.querySelector(".project-plus-icon");

  projectPlusIcon.addEventListener("click", () => {
    if (isFormOpen) {
      return;
    }

    addProjectForm();
    isFormOpen = true;

    const projectFormExitIcon = document.querySelector(".project-form-img");

    projectFormExitIcon.addEventListener("click", () => {
      removeAddProjectForm();
      isFormOpen = false;
    });

    const projectFormBtn = document.querySelector(".project-form-btn");

    projectFormBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addProjectsToArray();
    });
  });
}

function handleProjectNameClick(projectName) {
  const project = projects.find((project) => project.name === projectName);
  if (project) {
    createCustomProject(project);
  }
}

function attachProjectNameEventListeners() {
  const projectLink = document.querySelectorAll(".custom-project");
  projectLink.forEach((projectLink) => {
    const projectName = projectLink.textContent;
    projectLink.addEventListener("click", () => {
      clearMainContent();
      handleProjectNameClick(projectName);
    });
  });
}

export {
  attachEventListenersForAddTaskForm,
  attachEventListenersForAddProjectForm,
  attachProjectNameEventListeners,
};
