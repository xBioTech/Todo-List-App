import createAddTaskForm from "../components/addTaskForm/addTaskForm";
import { removeAddTaskFormContent } from "./clearContent";
import { addTaskToTodoListArray, todoList } from "./addTask";
import { sortTasks } from "./sortTasksByDueDate";

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

export default attachEventListenersForAddTaskForm;
