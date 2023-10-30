import createAddTaskForm from "../components/addTaskForm/addTaskForm";
import {
  removeAddTaskFormContent,
  removeAddProjectForm,
  clearMainContent,
} from "./clearContent";
import { addTaskToTodoListArray, todoList } from "./addTask";
import { sortTasks, todayTasks } from "./sortTasksByDueDate";
import addProjectForm from "../components/addProjectForm/addProjectForm";
import { addProjectsToArray, projects } from "./addProject";
import createCustomProject from "../components/customProjectsSection/createCustomProject";
import deleteModal from "../components/deleteModal/deleteModal";
import { deleteTask, taskElement } from "./deleteTask";
import { taskLi  } from "./addTaskToUl";
import createInfoForm from "../components/infoForm/infoForm";
import createEditFileForm from "../components/editFileForm/editFileForm";
import editFile from "./editFile";
import deleteProject from "./deleteProject";

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
      if (isFormOpen) {
        return;
      }

      deleteModal("Task?");
      isFormOpen = true;
    }
    const cancelBtn = document.querySelector(".cancel-btn");
    const deleteModalDiv = document.querySelector(".delete-modal");
    cancelBtn.addEventListener("click", () => {
      deleteModalDiv.remove();
      isFormOpen = false;
    });

    const deleteTaskBtn = document.querySelector(".modal-delete-btn");
    deleteTaskBtn.addEventListener("click", () => {
      const dataIndex = event.target.closest("li").getAttribute("data-index");
      deleteTask(dataIndex);
      deleteModalDiv.remove();
      isFormOpen = false;
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
      if (isFormOpen) {
        return;
      }

      createInfoForm(clickedTask);
      isFormOpen = true;

      const exitIcon = document.querySelector(".form-img");
      const infoForm = document.querySelector(".info-form");
      exitIcon.addEventListener("click", () => {
        infoForm.remove();
        isFormOpen = false;
      });
    }
  });
}

function attachEventListenersForEditButton() {
  const mainContent = document.querySelector(".main-content");

  mainContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
      const dataIndex = event.target.closest("li").getAttribute("data-index");
      if(isFormOpen){
        return;
      }

      createEditFileForm();
      isFormOpen = true;

      const exitIcon = document.querySelector(".form-img");
      const editForm = document.querySelector(".edit-form");
      exitIcon.addEventListener("click", ()=>{
        editForm.remove();
        isFormOpen = false;
      })

      const cancelBtn = document.querySelector(".cancel-changes-btn");
      cancelBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        editForm.remove();
        isFormOpen = false;
      })

      const submitBtn = document.querySelector(".submit-changes-btn");
      submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        editFile(dataIndex);
      })
    }
  });
}

function attachEventListenersForDeleteProjects(){
  const nav = document.querySelector(".nav");

  nav.addEventListener("click", (event)=>{
    if(event.target.classList.contains("delete-project-btn")){
    const dataIndex = event.target.closest("div").getAttribute("data-index");
    if(isFormOpen){
      return;
    }

    deleteModal("Project?");
    isFormOpen = true;

    const deleteModalDiv = document.querySelector(".delete-modal");

    const cancelBtn = document.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", (event)=>{
      event.preventDefault();
      deleteModalDiv.remove();
      isFormOpen = false;
    });

    const deleteProjectBtn = document.querySelector(".modal-delete-btn");
    deleteProjectBtn.addEventListener("click", (event)=>{
      event.preventDefault();
      deleteProject(deleteModalDiv, dataIndex);
      isFormOpen = false;
    })
    
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
  attachEventListenersForDeleteProjects,
};
