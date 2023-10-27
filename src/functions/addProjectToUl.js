import { attachProjectNameEventListeners } from "./eventHandler";
import wrenchSvg from "../assets/wrench-cog-outline.svg";
import deleteSvg from "../assets/minus-circle.svg"

function addProjectToUl(project, index) {
  const projectsUl = document.querySelector(".projects-ul");

  const container = document.createElement("div");
  container.classList.add("project");
  container.setAttribute("data-index", index);

  const projectLi = document.createElement("li");
  projectLi.classList.add("custom-project", project.name);

  const projectTitle = document.createElement("p");
  projectTitle.textContent = project.name
  projectLi.appendChild(projectTitle)

  const wrenchIcon = new Image();
  wrenchIcon.src = wrenchSvg;
  projectLi.appendChild(wrenchIcon);

  container.appendChild(projectLi);

  const deleteIcon = new Image();
  deleteIcon.src = deleteSvg;
  deleteIcon.classList.add("delete-project-btn");

  container.appendChild(deleteIcon);

  projectsUl.appendChild(container);

  attachProjectNameEventListeners();
}

export default addProjectToUl;
