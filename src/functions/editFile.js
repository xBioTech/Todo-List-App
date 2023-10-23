
import createAllSection from "../components/allSection/all";
import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { Task , todoList } from "./addTask";
import { switchTabs,  currentTab } from "./switchTabs";
import { clearMainContent } from "./clearContent";
import { todayTasks, formattedTodoList, weekTasks , sortTasks } from "./sortTasksByDueDate";
import { addTaskToUl } from "./addTaskToUl";
import { renderDeleteModal , attachEventListenersForInfoButton , attachEventListenersForEditButton } from "./eventHandler";


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


      if(currentTab === "all"){
         sortTasks();
         clearMainContent();
         renderDeleteModal();
         attachEventListenersForInfoButton(formattedTodoList);
         attachEventListenersForEditButton();
         formattedTodoList.forEach((task, index) => {
            addTaskToUl(task, index);
          });
      } else if (currentTab === "today"){
         sortTasks();
         clearMainContent();
         createToday();
         renderDeleteModal();
         attachEventListenersForInfoButton(todayTasks);
         attachEventListenersForEditButton();
         todayTasks.forEach((task, index) => {
            addTaskToUl(task, index);
          });
      } else if(currentTab === "week"){
         sortTasks();
         clearMainContent();
         createWeek();
         renderDeleteModal();
         attachEventListenersForInfoButton(weekTasks);
         attachEventListenersForEditButton();
         weekTasks.forEach((task, index) => {
            addTaskToUl(task, index);
          });
      }

   }
}


export default editFile;
 