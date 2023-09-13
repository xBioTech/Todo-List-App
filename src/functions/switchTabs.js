import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { clearMainContent } from "./clearContent";
import {
  attachEventListenersForAddTaskForm,
  renderDeleteModal,
} from "./eventHandler";
import { addTaskToUl } from "./addTaskToUl";
import {
  sortTasks,
  todayTasks,
  weekTasks,
  formattedTodoList,
} from "./sortTasksByDueDate";
import createAllSection from "../components/allSection/all";

function switchTabs() {
  const homeLi = document.querySelector(".home-li");
  const todayLi = document.querySelector(".today-li");
  const weekLi = document.querySelector(".week-li");
  const allLi = document.querySelector(".all-li");

  homeLi.addEventListener("click", () => {
    clearMainContent();
    createHome();
    attachEventListenersForAddTaskForm();
  });

  allLi.addEventListener("click", () => {
    clearMainContent();
    createAllSection();
    renderDeleteModal();
    sortTasks();
    formattedTodoList.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
    renderDeleteModal();
    sortTasks();
    todayTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    renderDeleteModal();
    sortTasks();
    weekTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });
}

export default switchTabs;
