import { parseISO, isSameDay, isSameWeek, format } from "date-fns";
import { todoList } from "./addTask";

let todayTasks = [];
let weekTasks = [];
let formattedTodoList = [];

function sortTasks() {
  todoList.sort((a, b) => a.dueDate - b.dueDate);
  todoList.forEach((task) => {
    if (typeof task.dueDate === "string") {
      task.dueDate = parseISO(task.dueDate);
    }
  });
  formattedTodoList = todoList.map((task) => ({
    ...task,
    dueDate: format(task.dueDate, "dd/MM/yyyy"),
  }));

  const currentDate = new Date();

  todayTasks = todoList
    .filter((task) => isSameDay(task.dueDate, currentDate))
    .map((task) => ({
      ...task,
      dueDate: format(task.dueDate, "dd/MM/yyyy"),
    }));
  weekTasks = todoList
    .filter((task) => isSameWeek(task.dueDate, currentDate))
    .map((task) => ({
      ...task,
      dueDate: format(task.dueDate, "dd/MM/yyyy"),
    }));

  todayTasks.sort((a, b) => a.dueDate - b.dueDate);
  weekTasks.sort((a, b) => a.dueDate - b.dueDate);

  console.log("Today's Tasks:", todayTasks);
  console.log("Week's Tasks:", weekTasks);
}

export { sortTasks, todayTasks, weekTasks, formattedTodoList };
