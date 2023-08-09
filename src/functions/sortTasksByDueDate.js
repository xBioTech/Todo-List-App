import { parseISO, isSameDay, isSameWeek, format } from "date-fns";
import { todoList } from "./addTask";

let todayTasks = [];
let weekTasks = [];

function sortTasks() {
  todoList.forEach((task) => {
    if (typeof task.dueDate === "string") {
      task.dueDate = parseISO(task.dueDate);
    }
  });

  const currentDate = new Date();

  todayTasks = todoList.filter((task) => isSameDay(task.dueDate, currentDate)).map((task) => ({
    ...task,
    dueDate: format(task.dueDate, 'dd/MM/yyyy')
  }));
  weekTasks = todoList.filter((task) => isSameWeek(task.dueDate, currentDate)).map((task) => ({
    ...task,
    dueDate: format(task.dueDate, 'dd/MM/yyyy')
  }));

  console.log("Today's Tasks:", todayTasks);
  console.log("Week's Tasks:", weekTasks);
}

export { sortTasks, todayTasks, weekTasks };
