import { todoList } from "./addTask";

let taskElement;

function deleteTask(taskArray, index) {
  taskElement = document.querySelector(`li[data-index="${index}"]`);
  taskElement.remove();
  taskArray.splice(index, 1);
}

export { taskElement, deleteTask };
