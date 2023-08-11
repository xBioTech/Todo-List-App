
function addTaskToUl(task){
  
    const taskUl = document.querySelector(".task-ul");

    const taskLi = document.createElement("li")
    taskLi.classList.add("task-li")

    const taskTitleParagrph = document.createElement("p")
    taskTitleParagrph.textContent = task.title
    taskLi.appendChild(taskTitleParagrph)

    const taskDueDateParagraph = document.createElement("p")
    taskDueDateParagraph.textContent = task.dueDate
    taskLi.appendChild(taskDueDateParagraph)

    const taskButton = document.createElement("button")
    taskButton.textContent = "X"
    taskLi.appendChild(taskButton)

    taskUl.appendChild(taskLi)
 
}


export default addTaskToUl