function clearMainContent() {
  const mainContentDiv = document.querySelector(".main-content");
  mainContentDiv.remove();
}

function removeAddTaskFormContent() {
  const form = document.querySelector(".add-task-form");
  form.remove();
}

function removeNavOnMobile(){
  const nav = document.querySelector(".nav")
  nav.remove()
}
export { clearMainContent, removeAddTaskFormContent, removeNavOnMobile };
