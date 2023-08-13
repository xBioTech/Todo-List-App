import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { clearMainContent } from "./clearContent";
import { attachEventListenersForAddTaskForm } from "./eventHandler";
import addTaskToUl from "./addTaskToUl";
import { todayTasks , weekTasks } from "./sortTasksByDueDate";


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
   todayTasks.forEach((task)=>{
    addTaskToUl(task)
   })
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    weekTasks.forEach((task)=>{
      addTaskToUl(task)
    })
  });
}

export default switchTabs;
