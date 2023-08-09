import { todoList } from "./addTask";
import { todayTasks , weekTasks } from "./sortTasksByDueDate";

function addTaskToUl(){
  

    const taskUl = document.querySelector(".task-ul");

    const testLi = document.createElement("li")
    testLi.classList.add("test-li")

    const testParagrph = document.createElement("p")
    testParagrph.textContent = todayTasks[todayTasks.length - 1].title
    testLi.appendChild(testParagrph)

    const testP = document.createElement("p")
    testP.textContent = todayTasks[todayTasks.length - 1].dueDate
    testLi.appendChild(testP)

    const testButton = document.createElement("button")
    testButton.textContent = "X"
    testLi.appendChild(testButton)
  


    taskUl.appendChild(testLi)

    
    
}

export default addTaskToUl;