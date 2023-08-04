import formImg from "../../assets/exit-to-app.svg";

function createAddTaskForm() {
  const contentDiv = document.getElementById("content");
  const form = document.createElement("form");
  form.setAttribute("action", "get");
  form.classList.add("add-task-form");

  const formHeaderContainer = document.createElement("div");
  formHeaderContainer.classList.add("form-header-container");

  const headerContainerH1 = document.createElement("h1");
  headerContainerH1.textContent = "Add a Task";
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
  flexContainer.appendChild(textareaDescription);

  const labelDueDate = document.createElement("label");
  labelDueDate.setAttribute("for", "duedate");
  labelDueDate.textContent = "Due Date";
  flexContainer.appendChild(labelDueDate);

  flexContainer.appendChild(brElement);

  const inputDueDate = document.createElement("input");
  inputDueDate.setAttribute("type", "date");
  inputDueDate.setAttribute("name", "duedate");
  inputDueDate.setAttribute("id", "duedate");
  inputDueDate.required = true;
  flexContainer.appendChild(inputDueDate);

  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority";
  flexContainer.appendChild(labelPriority);

  flexContainer.appendChild(brElement);

  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("name", "priority");
  selectPriority.setAttribute("id", "priority");
  const optionPlaceholder = document.createElement("option");
  optionPlaceholder.setAttribute("value", "");
  optionPlaceholder.textContent = "--Please choose an option--";
  selectPriority.appendChild(optionPlaceholder);
  const optionHighPriority = document.createElement("option");
  optionHighPriority.setAttribute("value", "high-priority");
  optionHighPriority.textContent = "🔥 Urgent AF";
  selectPriority.appendChild(optionHighPriority);
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.setAttribute("value", "medium-priority");
  optionMediumPriority.textContent = "🌟 Shiny but Not Urgent";
  selectPriority.appendChild(optionMediumPriority);
  const optionLowPriority = document.createElement("option");
  optionLowPriority.setAttribute("value", "low-priority");
  optionLowPriority.textContent = "🐌 Snail's Pace";
  selectPriority.appendChild(optionLowPriority);
  flexContainer.appendChild(selectPriority);

  const formBtn = document.createElement("button");
  formBtn.classList.add("form-btn");
  formBtn.textContent = "Add Task";
  flexContainer.appendChild(formBtn);

  form.appendChild(flexContainer);

  contentDiv.appendChild(form);
}

export default createAddTaskForm;
