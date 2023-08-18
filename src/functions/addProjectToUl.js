

function addProjectToUl(project){

    const projectsUl = document.querySelector(".projects-ul");

    const projectLi = document.createElement("li");
    projectLi.classList.add("custom-project");
    projectLi.textContent = project.name;


    projectsUl.appendChild(projectLi);
}

export default addProjectToUl;