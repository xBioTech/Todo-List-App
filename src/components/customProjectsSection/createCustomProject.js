import wrenchImg from "../../assets/wrench-cog-outline.svg";
import plusImg from "../../assets/plus-circle.svg";

function createCustomProject(project) {
  const contentDiv = document.getElementById("content");

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("main-content");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("project-headline-div");

  const wrenchSvg = new Image();
  wrenchSvg.src = wrenchImg;
  wrenchSvg.classList.add("project-main-icon");
  headlineContainer.appendChild(wrenchSvg);

  const projectHeadline = document.createElement("h1");
  projectHeadline.classList.add("project-headline");
  projectHeadline.textContent = project.name;
  headlineContainer.appendChild(projectHeadline);

  projectDiv.appendChild(headlineContainer);

  const projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("project-btn-div");

  const paragraph = document.createElement("p");
  paragraph.textContent = `Add task for ${project.name} here`;
  projectBtnDiv.appendChild(paragraph);

  const plusSvg = new Image();
  plusSvg.src = plusImg;
  plusSvg.classList.add("project-add-task-icon");
  projectBtnDiv.appendChild(plusSvg);

  projectDiv.appendChild(projectBtnDiv);

  const projectTasksDiv = document.createElement("div");
  projectTasksDiv.classList.add("tasks");

  const taskUl = document.createElement("ul");
  taskUl.classList.add("task-ul");
  projectTasksDiv.appendChild(taskUl);

  projectDiv.appendChild(projectTasksDiv);

  contentDiv.appendChild(projectDiv);
}

export default createCustomProject;
