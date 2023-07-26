import weekIcon from "../../assets/calendar-week.svg";

function createWeek() {
  const contentDiv = document.getElementById("content");
  const weekDiv = document.createElement("div");
  weekDiv.classList.add("week-main-content");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headline-container-week");

  const weekSvg = new Image();
  weekSvg.src = weekIcon;
  weekSvg.classList.add("week-main-icon");
  headlineContainer.appendChild(weekSvg);

  const weekHeadline = document.createElement("h1");
  weekHeadline.textContent = "This Week";
  weekHeadline.classList.add("week-headline");
  headlineContainer.appendChild(weekHeadline);

  weekDiv.appendChild(headlineContainer);

  const taskHeadlineDiv = document.createElement("div");
  taskHeadlineDiv.classList.add("task-headline-div");

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = "Tasks for this Week";
  taskHeadlineDiv.appendChild(taskParagraph);

  weekDiv.appendChild(taskHeadlineDiv);

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("tasks");

  const taskUl = document.createElement("ul");

  taskDiv.appendChild(taskUl);

  weekDiv.appendChild(taskDiv);

  contentDiv.appendChild(weekDiv);
}

export default createWeek;
