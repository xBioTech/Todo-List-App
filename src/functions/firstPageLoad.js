import createHeader from "../components/header/header";
import createHamburgerIconOnMobile from "../components/hamburger-icon/hamburger";
import createNav from "../components/nav/nav";
import createHome from "../components/homeSection/home";
import { attachEventListenersForAddTaskForm , attachEventListenersForAddProjectForm , attachEventListenersForDeleteProjects ,  } from "./eventHandler";

function firstPageLoad() {
  createHeader();
  createNav();
  createHome();
  attachEventListenersForAddTaskForm();
  attachEventListenersForAddProjectForm();
  attachEventListenersForDeleteProjects();

  if (window.matchMedia("(max-width: 767px)").matches) {
    createHamburgerIconOnMobile();
  }
}

export default firstPageLoad;
