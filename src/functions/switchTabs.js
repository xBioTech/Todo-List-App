import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { clearMainContent } from "./clearContent";
import { attachEventListenersForAddTaskForm } from "./eventHandler";
import addTaskToUl from "./addTaskToUl";
import { sortTasks, todayTasks, weekTasks } from "./sortTasksByDueDate";
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
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
    sortTasks();
    todayTasks.forEach((task) => {
      addTaskToUl(task);
    });
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    sortTasks();
    weekTasks.forEach((task) => {
      addTaskToUl(task);
    });
  });
}

export default switchTabs;
