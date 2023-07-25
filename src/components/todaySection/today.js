import todayIcon from "../../assets/calendar-today.svg";

function createToday() {
  const contentDiv = document.getElementById("content");
  const todayDiv = document.createElement("div");
  todayDiv.classList.add("today-main-content");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headline-container-today");

  const todaySvg = new Image();
  todaySvg.src = todayIcon;
  todaySvg.classList.add("today-main-icon");
  headlineContainer.appendChild(todaySvg);

  const todayHeadline = document.createElement("h1");
  todayHeadline.textContent = "Today";
  todayHeadline.classList.add("today-headline");
  headlineContainer.appendChild(todayHeadline);

  todayDiv.appendChild(headlineContainer);

  const taskHeadlineDiv = document.createElement("div");
  taskHeadlineDiv.classList.add("task-headline-div");

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = "Tasks for Today";
  taskHeadlineDiv.appendChild(taskParagraph);

  todayDiv.appendChild(taskHeadlineDiv);

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("tasks");

  const taskUl = document.createElement("ul");

  taskDiv.appendChild(taskUl);

  todayDiv.appendChild(taskDiv);

  contentDiv.appendChild(todayDiv);
}

export default createToday;
