import formImg from "../../assets/exit-to-app.svg";

function createEditFileForm() {
  const contentDiv = document.getElementById("content");
  const form = document.createElement("form");
  form.setAttribute("action", "get");
  form.classList.add("edit-form");

  const formHeaderContainer = document.createElement("div");
  formHeaderContainer.classList.add("form-header-container");

  const headerContainerH1 = document.createElement("h1");
  headerContainerH1.textContent = "Edit Task";
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
  inputTitle.value = "test";
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
  textareaDescription.value = "test";
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
  inputDueDate.value = "testdate"
  inputDueDate.addEventListener("mouseenter", function() {
    this.setAttribute("type", "date");
  });
  inputDueDate.addEventListener("mouseleave", function() {
    this.setAttribute("type", "text");
    inputDueDate.value = "testdate"
  });
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
  optionHighPriority.setAttribute("value", "🔥 Urgent AF");
  optionHighPriority.textContent = "🔥 Urgent AF";
  selectPriority.appendChild(optionHighPriority);
  const optionMediumPriority = document.createElement("option");
  optionMediumPriority.setAttribute("value", "🌟 Shiny but Not Urgent");
  optionMediumPriority.textContent = "🌟 Shiny but Not Urgent";
  selectPriority.appendChild(optionMediumPriority);
  const optionLowPriority = document.createElement("option");
  optionLowPriority.setAttribute("value", "🐌 Snail's Pace");
  optionLowPriority.textContent = "🐌 Snail's Pace";
  selectPriority.appendChild(optionLowPriority);
  flexContainer.appendChild(selectPriority);

  flexContainer.appendChild(selectPriority);

  form.appendChild(flexContainer);

  const formFooterDiv = document.createElement("div");
  formFooterDiv.classList.add("form-footer-div");

  const submitChangesBtn = document.createElement("button");
  submitChangesBtn.classList.add("submit-changes-btn");
  submitChangesBtn.textContent = "Submit Changes";

  const cancelChangesBtn = document.createElement("button");
  cancelChangesBtn.classList.add("cancel-changes-btn");
  cancelChangesBtn.textContent = "Cancel";

  formFooterDiv.appendChild(cancelChangesBtn);
  formFooterDiv.appendChild(submitChangesBtn);

  form.appendChild(formFooterDiv);

  contentDiv.appendChild(form);
}

export default createEditFileForm;
