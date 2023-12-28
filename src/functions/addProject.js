import addProjectToUl from "./addProjectToUl";
import setLocalStorage from "./setLocalStorage";

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

    /*
    This would have worked as well

    projects.forEach((project, index) => {
  addProjectToUl(project, index);
});
    */

    const index = projects.indexOf(newProject);
  
      setLocalStorage("projectsLocalStorage", newProject);
      addProjectToUl(newProject, index);
   
  }
  console.log(projects);

  projectNameInput.value = "";
}

export { addProjectsToArray, projects };
