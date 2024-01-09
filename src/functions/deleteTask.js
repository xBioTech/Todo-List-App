import { sortTasks } from "./sortTasksByDueDate";


let taskElement;

function deleteTask(taskArray, index) {
  taskElement = document.querySelector(`li[data-index="${index}"]`);
  taskElement.remove();
  taskArray.splice(index, 1);


  sortTasks(taskArray);
}

export { taskElement, deleteTask };