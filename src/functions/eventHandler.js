import createAddTaskForm from "../components/addTaskForm/addTaskForm";
import {
  removeAddTaskFormContent,
  removeAddProjectForm,
  clearMainContent,
} from "./clearContent";
import { addTaskToTodoListArray } from "./addTask";
import { sortTasks, todayTasks } from "./sortTasksByDueDate";
import addProjectForm from "../components/addProjectForm/addProjectForm";
import { addProjectsToArray, projects } from "./addProject";
import createCustomProject from "../components/customProjectsSection/createCustomProject";
import deleteModal from "../components/deleteModal/deleteModal";
import { deleteTask, taskElement } from "./deleteTask";
import { taskLi } from "./addTaskToUl";
import createInfoForm from "../components/infoForm/infoForm";

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

function renderDeleteModal() {
  const mainContent = document.querySelector(".main-content");

  mainContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      deleteModal();
    }
    const cancelBtn = document.querySelector(".cancel-btn");
    const deleteModalDiv = document.querySelector(".delete-modal");
    cancelBtn.addEventListener("click", () => {
      deleteModalDiv.remove();
    });

    const deleteTaskBtn = document.querySelector(".modal-delete-btn");
    deleteTaskBtn.addEventListener("click", () => {
      const dataIndex = event.target.closest("li").getAttribute("data-index");
      deleteTask(dataIndex);
      deleteModalDiv.remove();
    });
  });
}

function attachEventListenersForInfoButton(taskArray) {
  const mainContent = document.querySelector(".main-content");

  mainContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("info-btn")) {
      const dataIndex = event.target.closest("li").getAttribute("data-index");
      const clickedTask = taskArray[dataIndex];
      console.log(clickedTask);
      createInfoForm(clickedTask);

      const exitIcon = document.querySelector(".form-img");
      const infoForm = document.querySelector(".info-form");
      exitIcon.addEventListener("click", () => {
        infoForm.remove();
      });
    }
  });
}

function attachEventListenersForEditButton() {
  const mainContent = document.querySelector(".main-content");

  mainContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
      console.log("test");
    }
  });
}

export {
  attachEventListenersForAddTaskForm,
  attachEventListenersForAddProjectForm,
  attachProjectNameEventListeners,
  renderDeleteModal,
  attachEventListenersForInfoButton,
  attachEventListenersForEditButton,
};