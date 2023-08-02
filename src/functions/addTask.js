const todoList = [];

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function addTaskToTodoListArray(e) {
  e.preventDefault();

  const formTitleInput = document.getElementById("title");
  const formDescriptionInput = document.getElementById("description");
  const formDuedateInput = document.getElementById("duedate");
  const formPriorityInput = document.getElementById("priority");

  const title = formTitleInput.value;
  const description = formDescriptionInput.value;
  const duedate = formDuedateInput.value;
  const priority = formPriorityInput.value;

  const newTask = new Task(title, description, duedate, priority);

  todoList.push(newTask);

  formTitleInput.value = "";
  formDescriptionInput.value = "";
  formDuedateInput.value = "";
  formPriorityInput.value = "";
}

function addTaskToUl() {}
