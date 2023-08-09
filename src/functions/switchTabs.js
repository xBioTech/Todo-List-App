import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { clearMainContent } from "./clearContent";
import attachEventListenersForAddTaskForm from "./eventHandler";
import addTaskToUl from "./addTaskToUl";


function switchTabs() {
  const homeLi = document.querySelector(".home-li");
  const todayLi = document.querySelector(".today-li");
  const weekLi = document.querySelector(".week-li");

  homeLi.addEventListener("click", () => {
    clearMainContent();
    createHome();
    attachEventListenersForAddTaskForm();
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
   addTaskToUl()
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
  });
}

export default switchTabs;
