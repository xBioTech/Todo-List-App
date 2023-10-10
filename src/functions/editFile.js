
import { Task , todoList } from "./addTask";

function editFile(index){
   const formTitleInput = document.getElementById("title");
   const formDescriptionInput = document.getElementById("description");
   const formDuedateInput = document.getElementById("duedate");
   const formPriorityInput = document.getElementById("priority");

   const formTitleValue = formTitleInput.value;
   const formDescriptionValue = formDescriptionInput.value;
   const formDuedateValue = formDuedateInput.value;
   const formPriorityValue = formPriorityInput.value;

   function isDateValid(dateStr) {
      return isNaN(new Date(dateStr));
    }

   if(formTitleValue === ""){
      formTitleInput.setCustomValidity("to Edit a Task you need to give the task a title");
      formTitleInput.reportValidity();
   } else if (formDuedateValue === "" || isDateValid(formDuedateValue)){
      formDuedateInput.setCustomValidity("please provide a due Date for the Task");
      formDuedateInput.reportValidity();
   } else if (formTitleValue !== "" && formDuedateValue !== ""){
      const editedTask = new Task(formTitleValue, formDescriptionValue, formDuedateValue, formPriorityValue);

      todoList.splice(index, 1, editedTask);
   }
}


export default editFile;
 