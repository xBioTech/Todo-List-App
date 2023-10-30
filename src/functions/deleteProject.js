import { projects } from "./addProject";

let projectDOMElement;

function deleteProject(projectDiv, index){
    projectDOMElement = document.querySelector(`div[data-index="${index}"]`);
    projectDOMElement.remove();
    projectDiv.remove();
    projects.splice(index, 1);
}

export default deleteProject;