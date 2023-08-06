import { parseISO, isSameDay, isSameWeek, isToday } from "date-fns";
import { todoList } from "./addTask";

function sortTasks() {
  todoList.forEach((task) => {
    if (typeof task.dueDate === "string") {
      task.dueDate = parseISO(task.dueDate);
    }
  });

  const currentDate = new Date();

  const todayTasks = todoList.filter((task) =>
    isToday(task.dueDate, currentDate),
  );
  const weekTasks = todoList.filter((task) =>
    isSameWeek(task.dueDate, currentDate),
  );

  console.log("Today's Tasks:", todayTasks);
  console.log("Week's Tasks:", weekTasks);
}

export default sortTasks;
