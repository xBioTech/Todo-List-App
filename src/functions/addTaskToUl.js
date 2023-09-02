import viewMoreIcon from "../assets/dots-vertical.svg";
import deleteIcon from "../assets/minus-circle.svg";

function addTaskToUl(task) {
  const taskUl = document.querySelector(".task-ul");

  const taskLi = document.createElement("li");
  taskLi.classList.add("task-li");

  const taskTitleParagrph = document.createElement("p");
  taskTitleParagrph.textContent = task.title;
  taskLi.appendChild(taskTitleParagrph);

  const taskDueDateParagraph = document.createElement("p");
  taskDueDateParagraph.textContent = task.dueDate;
  taskLi.appendChild(taskDueDateParagraph);

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons-div");

  const viewMoreSvg = new Image();
  viewMoreSvg.src = viewMoreIcon;
  viewMoreSvg.classList.add("show-more");
  iconsDiv.appendChild(viewMoreSvg);

  const deleteSvg = new Image();
  deleteSvg.src = deleteIcon;
  deleteSvg.classList.add("delete-btn");
  iconsDiv.appendChild(deleteSvg);

  taskLi.appendChild(iconsDiv);

  taskUl.appendChild(taskLi);
}

export default addTaskToUl;
