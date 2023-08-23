import allIcon from "../../assets/calendar-all.svg";

function createAllSection() {
  const contentDiv = document.getElementById("content");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-content");

  const allTasksHeaderContainer = document.createElement("div");
  allTasksHeaderContainer.classList.add("headline-container-all");

  const allTasksHeadline = document.createElement("h1");
  allTasksHeadline.classList.add("all-tasks-headline");
  allTasksHeadline.textContent = "All Tasks";
  allTasksHeaderContainer.appendChild(allTasksHeadline);

  const allSvg = new Image();
  allSvg.src = allIcon;
  allSvg.classList.add("all-tasks-main-icon");
  allTasksHeaderContainer.appendChild(allSvg);

  mainDiv.appendChild(allTasksHeaderContainer);

  const allTasksDiv = document.createElement("div");
  allTasksDiv.classList.add("all-tasks-div");

  const allTasksParagraph = document.createElement("p");
  allTasksParagraph.textContent = "all open tasks";

  allTasksDiv.appendChild(allTasksParagraph);
  mainDiv.appendChild(allTasksDiv);

  const tasks = document.createElement("div");
  tasks.classList.add("tasks");

  const taskUl = document.createElement("ul");
  taskUl.classList.add("task-ul");

  tasks.appendChild(taskUl);
  mainDiv.appendChild(tasks);

  contentDiv.appendChild(mainDiv);
}

export default createAllSection;
