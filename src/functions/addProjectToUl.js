import { attachProjectNameEventListeners } from "./eventHandler";

function addProjectToUl(project) {
  const projectsUl = document.querySelector(".projects-ul");

  const projectLi = document.createElement("li");
  projectLi.classList.add("custom-project", project.name);
  projectLi.textContent = project.name;

  projectsUl.appendChild(projectLi);
  attachProjectNameEventListeners();
}

export default addProjectToUl;
