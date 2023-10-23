import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { clearMainContent } from "./clearContent";
import {
  attachEventListenersForAddTaskForm,
  attachEventListenersForEditButton,
  attachEventListenersForInfoButton,
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

let currentTab = "";

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
    currentTab = "all";
    renderDeleteModal();
    attachEventListenersForInfoButton(formattedTodoList);
    attachEventListenersForEditButton();
    sortTasks();
    formattedTodoList.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
    currentTab = "today";
    renderDeleteModal();
    attachEventListenersForInfoButton(todayTasks);
    attachEventListenersForEditButton();
    sortTasks();
    todayTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    currentTab = "week";
    renderDeleteModal();
    attachEventListenersForInfoButton(weekTasks);
    attachEventListenersForEditButton();
    sortTasks();
    weekTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });
}

export {switchTabs, 
  currentTab,};
