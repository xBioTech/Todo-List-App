import formImg from "../../assets/exit-to-app.svg";

function addProjectForm(){
const contentDiv = document.getElementById("content");

const projectForm = document.createElement("form");
projectForm.setAttribute("action", "get");
projectForm.classList.add("add-project-form", "add-project-form-opened");

const projectFormHeaderContainer = document.createElement("div");
projectFormHeaderContainer.classList.add("project-form-header");

const projectFormHeader = document.createElement("h1");
projectFormHeader.textContent = "Add Project";
projectFormHeaderContainer.appendChild(projectFormHeader);

const formSvg = new Image();
formSvg.src = formImg;
formSvg.classList.add("project-form-img");
projectFormHeaderContainer.appendChild(formSvg);

projectForm.appendChild(projectFormHeaderContainer);

const flexContainer = document.createElement("div");
flexContainer.classList.add("project-flex-container");

const labelProjectName = document.createElement("label");
labelProjectName.setAttribute("for", "name");
labelProjectName.textContent = "Your Projects Name";
flexContainer.appendChild(labelProjectName);

const brElement = document.createElement("br");
flexContainer.appendChild(brElement);

const inputProjectName = document.createElement("input");
inputProjectName.setAttribute("type", "text");
inputProjectName.setAttribute("name", "name");
inputProjectName.setAttribute("id", "name");
inputProjectName.required = true;
flexContainer.appendChild(inputProjectName);

const projectFormBtn = document.createElement("button");
projectFormBtn.classList.add("project-form-btn");
projectFormBtn.textContent = "Add Project";
flexContainer.appendChild(projectFormBtn);

projectForm.appendChild(flexContainer);

contentDiv.appendChild(projectForm);
}

export default addProjectForm