
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import { Task , todoList } from "./addTask";
import { switchTabs, } from "./switchTabs";
import { clearMainContent } from "./clearContent";
import { todayTasks, formattedTodoList, weekTasks , sortTasks } from "./sortTasksByDueDate";
import { addTaskToUl } from "./addTaskToUl";
import { renderDeleteModal , attachEventListenersForInfoButton , attachEventListenersForEditButton, attachEventListenersForCustomProjectsAddTaskForm , handleProjectTabClick } from "./eventHandler";
import { projects } from "./addProject";
import createCustomProject from "../components/customProjectsSection/createCustomProject";
import { getCurrentTab } from "./currentTab";
import { getCustomProjectDataIndex } from "./customProjectDataIndex";

function editFile(taskArray, index){
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

      taskArray.splice(index, 1, editedTask);

      const currentTab = getCurrentTab();
      const customProjectDataIndex = getCustomProjectDataIndex();

      if(currentTab === "all"){
         sortTasks();
         clearMainContent();
         renderDeleteModal();
         attachEventListenersForInfoButton(formattedTodoList);
         attachEventListenersForEditButton(todoList);
         formattedTodoList.forEach((task, taskIndex) => {
            addTaskToUl(task, taskIndex);
          });
      } else if (currentTab === "today"){
         sortTasks();
         clearMainContent();
         createToday();
         renderDeleteModal();
         attachEventListenersForInfoButton(todayTasks);
         attachEventListenersForEditButton(todoList);
         todayTasks.forEach((task, taskIndex) => {
            addTaskToUl(task, taskIndex);
          });
      } else if(currentTab === "week"){
         sortTasks();
         clearMainContent();
         createWeek();
         renderDeleteModal();
         attachEventListenersForInfoButton(weekTasks);
         attachEventListenersForEditButton(todoList);
         weekTasks.forEach((task, taskIndex) => {
            addTaskToUl(task, taskIndex);
          });
      }
      else if(currentTab === "customProject"){  
         handleProjectTabClick(customProjectDataIndex);
      }

   }
}


export default editFile;
 