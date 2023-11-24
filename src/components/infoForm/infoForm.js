import formImg from "../../assets/exit-to-app.svg";

function createInfoForm(task) {
  const contentDiv = document.getElementById("content");
  const form = document.createElement("form");
  form.setAttribute("action", "get");
  form.classList.add("info-form", "info-opened");

  const formHeaderContainer = document.createElement("div");
  formHeaderContainer.classList.add("form-header-container");

  const headerContainerH1 = document.createElement("h1");
  headerContainerH1.textContent = "Info";
  formHeaderContainer.appendChild(headerContainerH1);

  const formSvg = new Image();
  formSvg.src = formImg;
  formSvg.classList.add("form-img");
  formHeaderContainer.appendChild(formSvg);

  form.appendChild(formHeaderContainer);

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title";
  flexContainer.appendChild(labelTitle);

  const brElement = document.createElement("br");
  flexContainer.appendChild(brElement);

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("id", "title");
  inputTitle.required = true;
  inputTitle.readOnly = true;
  inputTitle.value = task.title;
  flexContainer.appendChild(inputTitle);

  const labelDescription = document.createElement("label");
  labelDescription.setAttribute("for", "description");
  labelDescription.textContent = "Description";
  flexContainer.appendChild(labelDescription);

  flexContainer.appendChild(brElement);

  const textareaDescription = document.createElement("textarea");
  textareaDescription.setAttribute("name", "description");
  textareaDescription.setAttribute("id", "description");
  textareaDescription.setAttribute("cols", "30");
  textareaDescription.setAttribute("rows", "4");
  textareaDescription.readOnly = true;
  textareaDescription.value = task.description;
  flexContainer.appendChild(textareaDescription);

  const labelDueDate = document.createElement("label");
  labelDueDate.setAttribute("for", "duedate");
  labelDueDate.textContent = "Due Date";
  flexContainer.appendChild(labelDueDate);

  flexContainer.appendChild(brElement);

  const inputDueDate = document.createElement("input");
  inputDueDate.setAttribute("type", "text");
  inputDueDate.setAttribute("name", "duedate");
  inputDueDate.setAttribute("id", "duedate");
  inputDueDate.required = true;
  inputDueDate.readOnly = true;
  inputDueDate.value = task.dueDate;
  flexContainer.appendChild(inputDueDate);

  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority";
  flexContainer.appendChild(labelPriority);

  flexContainer.appendChild(brElement);

  const selectPriority = document.createElement("input");
  selectPriority.setAttribute("type", "text");
  selectPriority.setAttribute("name", "priority");
  selectPriority.setAttribute("id", "priority");
  selectPriority.readOnly = true;
  selectPriority.value = task.priority;

  flexContainer.appendChild(selectPriority);

  form.appendChild(flexContainer);

  contentDiv.appendChild(form);
}

export default createInfoForm;
