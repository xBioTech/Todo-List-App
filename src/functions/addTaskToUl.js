import infoIcon from "../assets/information-variant-circle-outline.svg";
import deleteIcon from "../assets/minus-circle.svg";
import fileEditIcon from "../assets/file-edit.svg";

let taskLi;

function addTaskToUl(task, index) {
  const taskUl = document.querySelector(".task-ul");

  taskLi = document.createElement("li");
  taskLi.setAttribute("data-index", index);
  taskLi.classList.add("task-li");

  const taskTitleParagrph = document.createElement("p");
  taskTitleParagrph.textContent = task.title;
  taskLi.appendChild(taskTitleParagrph);

  const taskDueDateParagraph = document.createElement("p");
  taskDueDateParagraph.textContent = task.dueDate;
  taskLi.appendChild(taskDueDateParagraph);

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons-div");

  const infoSvg = new Image();
  infoSvg.src = infoIcon;
  infoSvg.classList.add("info-btn");
  iconsDiv.appendChild(infoSvg);

  const fileEditSvg = new Image();
  fileEditSvg.src = fileEditIcon;
  fileEditSvg.classList.add("edit-btn");
  iconsDiv.appendChild(fileEditSvg);

  const deleteSvg = new Image();
  deleteSvg.src = deleteIcon;
  deleteSvg.classList.add("delete-btn");
  iconsDiv.appendChild(deleteSvg);

  taskLi.appendChild(iconsDiv);

  taskUl.appendChild(taskLi);
}

export { addTaskToUl, taskLi };
