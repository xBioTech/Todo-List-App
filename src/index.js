import "./style.scss";
import "./components/header/style.scss";
import "./components/hamburger-icon/style.scss";
import "./components/nav/style.scss";
import "./components/homeSection/style.scss";
import "./components/todaySection/style.scss";
import "./components/weekSection/style.scss";
import "./components/addTaskForm/style.scss";
import "./components/addProjectForm/style.scss";
import "./components/customProjectsSection/style.scss";
import "./components/allSection/style.scss";
import "./components/deleteModal/style.scss";
import "./components/editFileForm/style.scss";
import "./components/infoForm/style.scss"
import firstPageLoad from "./functions/firstPageLoad";
import { switchTabs }from "./functions/switchTabs";
import toggleNav from "./functions/toggleNav";
import { attachProjectTabEventListeners } from "./functions/eventHandler";

firstPageLoad();
switchTabs();
attachProjectTabEventListeners();
toggleNav();
