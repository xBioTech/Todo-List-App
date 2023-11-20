function clearMainContent() {
  const mainContentDiv = document.querySelector(".main-content");
  mainContentDiv.remove();
}

function removeAddTaskFormContent() {
  const form = document.querySelector(".add-task-form");
  form.remove();
}

function removeNavOnMobile(){
  const nav = document.querySelector(".nav");
  nav.remove();
}

function removeAddProjectForm(){
  const projectForm = document.querySelector(".add-project-form");
  projectForm.remove();
}

function clearTaskUlForCustomProjects(){
  const taskUl = document.querySelector(".task-ul");
  taskUl.innerHTML = '';
}

export { clearMainContent, removeAddTaskFormContent, removeNavOnMobile, removeAddProjectForm, clearTaskUlForCustomProjects };
