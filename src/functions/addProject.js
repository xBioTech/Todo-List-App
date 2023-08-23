import addProjectToUl from "./addProjectToUl";

class Project {
  constructor(name) {
    this.name = name;
    this.uniqueArray = [];
  }
}

const projects = [];

function addProjectsToArray() {
  const projectNameInput = document.getElementById("name");

  const name = projectNameInput.value;

  if (name === "") {
    projectNameInput.setCustomValidity("to add a project enter a name");
    projectNameInput.reportValidity();
  } else {
    const newProject = new Project(name);
    projects.push(newProject);
    addProjectToUl(newProject);
  }
  console.log(projects);

  projectNameInput.value = "";
}

export { addProjectsToArray, projects };
