import { projects } from "./addProject";
import addProjectToUl from "./addProjectToUl";
import getLocalStorage from "./getLocalStorage";

function loadProjectsFromLocalStorage(){
    const storedProjects = getLocalStorage("projectsLocalStorage");

    if(storedProjects){
        storedProjects.forEach((project, index)=>{
            addProjectToUl(project, index);
        })
    } if(storedProjects){
        storedProjects.forEach((item)=>{
            projects.push(item);
        })
    }
}

export default loadProjectsFromLocalStorage;