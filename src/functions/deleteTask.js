import { todoList } from "./addTask";

let taskElement;

function deleteTask(index) {
  taskElement = document.querySelector(`li[data-index="${index}"]`);
  taskElement.remove();
  todoList.splice(index, 1);
}

export { taskElement, deleteTask };
