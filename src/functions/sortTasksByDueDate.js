import { parseISO, isSameDay, isSameWeek, format } from "date-fns";
import { todoList } from "./addTask";
import setLocalStorage from "./setLocalStorage";
import getLocalStorage from "./getLocalStorage";

let todayTasks = [];
let weekTasks = [];
let formattedTodoList = [];

function sortTasks(arr) {

  const storedFormattedList = getLocalStorage("formattedTodoListLocalStorage"); 
  const storedTodayList = getLocalStorage("TodayTodoListLocalStorage");
  const storedWeekList = getLocalStorage("weekTodoListLocalStorage");


  /*
  formattedTodoList = storedFormattedList || formattedTodoList;
  todayTasks = storedTodayList || todayTasks;
  weekTasks = storedWeekList || weekTasks;
*/

  arr.sort((a, b) => a.dueDate - b.dueDate);
  arr.forEach((task) => {
    if (typeof task.dueDate === "string") {
      task.dueDate = parseISO(task.dueDate);
    }
  });
  formattedTodoList = arr.map((task) => ({
    ...task,
    dueDate: format(task.dueDate, "dd/MM/yyyy"),
  }));



  const currentDate = new Date();

  todayTasks = arr
    .filter((task) => isSameDay(task.dueDate, currentDate))
    .map((task) => ({
      ...task,
      dueDate: format(task.dueDate, "dd/MM/yyyy"),
    }));


  weekTasks = arr
    .filter((task) => isSameWeek(task.dueDate, currentDate))
    .map((task) => ({
      ...task,
      dueDate: format(task.dueDate, "dd/MM/yyyy"),
    }));


  todayTasks.sort((a, b) => a.dueDate - b.dueDate);
  weekTasks.sort((a, b) => a.dueDate - b.dueDate);


  if (!storedFormattedList) {
    setLocalStorage("formattedTodoListLocalStorage", formattedTodoList);
  }  else {
    const stringifyStored = storedFormattedList.map(JSON.stringify);
    const stringifyFormatted = formattedTodoList.map(JSON.stringify);
    
    const mergedArrays = new Set([...stringifyStored, ...stringifyFormatted]);

    const uniqueMergedArray = Array.from(mergedArrays).map(JSON.parse);
    
    setLocalStorage("formattedTodoListLocalStorage", uniqueMergedArray);
  }

  if (!storedTodayList) {
    setLocalStorage("TodayTodoListLocalStorage", todayTasks);
  }

  if (!storedWeekList) {
    setLocalStorage("weekTodoListLocalStorage", weekTasks);
  }



  console.log("Today's Tasks:", todayTasks);
  console.log("Week's Tasks:", weekTasks);
}

function sortCustomTasks(uniqueArray) {

 uniqueArray.forEach((task) => {
  if (typeof task.dueDate === "string" && !task.isParsedAndFormatted) {
    task.isParsedAndFormatted = false;
    const parsedDate = parseISO(task.dueDate);
    if (!isNaN(parsedDate)) {
      task.dueDate = format(parsedDate, "dd/MM/yyyy");
      task.isParsedAndFormatted = true;
    } else {
      console.error(`Invalid date string for task: ${task.dueDate}`);
    }
  }
});

uniqueArray.sort((a, b) => {
  const dateA = new Date(a.dueDate);
  const dateB = new Date(b.dueDate);
  return dateA - dateB;
});

  return uniqueArray


}

export { sortTasks, todayTasks, weekTasks, formattedTodoList, sortCustomTasks, };
