import "./style.scss";
import "./components/header/style.scss";
import "./components/hamburger-icon/style.scss";
import "./components/nav/style.scss";
import "./components/homeSection/style.scss";
import createHeader from "./components/header/header.js";
import createHamburgerIconOnMobile from "./components/hamburger-icon/hamburger";
import createNav from "./components/nav/nav";
import createHome from "./components/homeSection/home.js";

createHeader();
createHamburgerIconOnMobile(); // implement on mobile only later in development
createNav();
createHome();
