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
import { projects } from "./addProject";
import { todoList } from "./addTask";
import { setCurrentTab, } from "./currentTab";


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
    setCurrentTab("all");
    renderDeleteModal(todoList);
    attachEventListenersForInfoButton(formattedTodoList);
    attachEventListenersForEditButton(todoList);
    sortTasks(todoList);
    formattedTodoList.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
    setCurrentTab("today");
    renderDeleteModal(todoList);
    attachEventListenersForInfoButton(todayTasks);
    attachEventListenersForEditButton(todoList);
    sortTasks(todoList);
    todayTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    setCurrentTab("week");
    renderDeleteModal(todoList);
    attachEventListenersForInfoButton(weekTasks);
    attachEventListenersForEditButton(todoList);
    sortTasks(todoList);
    weekTasks.forEach((task, index) => {
      addTaskToUl(task, index);
    });
  });
}

export { switchTabs };
