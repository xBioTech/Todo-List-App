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
import { todoList } from "./addTask";
import { setCurrentTab, } from "./currentTab";
import getLocalStorage from "./getLocalStorage";
import { populateLocalStorage } from "./updateLocalStorage";


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
    populateLocalStorage("formattedTodoListLocalStorage", formattedTodoList);

    const storedTodoList = getLocalStorage("formattedTodoListLocalStorage");
    if(storedTodoList){
      storedTodoList.forEach((task, index) => {
        addTaskToUl(task, index);
      });
    } else {
      formattedTodoList.forEach((task, index) => {
        addTaskToUl(task, index);
      });
    }
    
  });

  todayLi.addEventListener("click", () => {
    clearMainContent();
    createToday();
    setCurrentTab("today");
    renderDeleteModal(todoList);
    attachEventListenersForInfoButton(todayTasks);
    attachEventListenersForEditButton(todoList);
    sortTasks(todoList);
    populateLocalStorage("TodayTodoListLocalStorage", todayTasks);

    const storedTodoList = getLocalStorage("TodayTodoListLocalStorage");

    if(storedTodoList){
      storedTodoList.forEach((task, index)=>{
        addTaskToUl(task, index);
      })
    } else {
      todayTasks.forEach((task, index) => {
        addTaskToUl(task, index);
      });
    }
  });

  weekLi.addEventListener("click", () => {
    clearMainContent();
    createWeek();
    setCurrentTab("week");
    renderDeleteModal(todoList);
    attachEventListenersForInfoButton(weekTasks);
    attachEventListenersForEditButton(todoList);
    sortTasks(todoList);
    populateLocalStorage("weekTodoListLocalStorage", weekTasks);

    const storedTodoList = getLocalStorage("weekTodoListLocalStorage");

    if(storedTodoList){
      storedTodoList.forEach((task, index)=>{
        addTaskToUl(task, index);
      })
    } else {
      weekTasks.forEach((task, index) => {
        addTaskToUl(task, index);
      });
    }
  });
}

export { switchTabs };
