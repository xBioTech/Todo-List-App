import homeIcon from "../../assets/home-plus.svg";
import todayIcon from "../../assets/calendar-today.svg";
import weekIcon from "../../assets/calendar-week.svg";
import plusIcon from "../../assets/plus-circle.svg";
import allIcon from "../../assets/calendar-all.svg";

function createNav() {
  const contentDiv = document.getElementById("content");
  const navDiv = document.createElement("div");
  const navDivTop = document.createElement("div");
  navDivTop.classList.add("nav-div-top");
  const navDivBottom = document.createElement("div");
  navDivBottom.classList.add("nav-div-bottom");
  navDiv.classList.add("nav", "opened");

  const unorderedListTop = document.createElement("ul");
  const unorderedListBottom = document.createElement("ul");
  unorderedListBottom.classList.add("projects-ul");

  const home = document.createElement("li");
  home.classList.add("home-li");
  const homeHeadline = document.createElement("h3");
  homeHeadline.textContent = "Home";
  home.appendChild(homeHeadline);
  unorderedListTop.appendChild(home);

  const homeSvg = new Image();
  homeSvg.src = homeIcon;
  homeSvg.classList.add("home-icon");
  home.appendChild(homeSvg);

  const allTab = document.createElement("li");
  allTab.classList.add("all-li");
  allTab.textContent = "All tasks";
  unorderedListTop.appendChild(allTab);

  const allSvg = new Image();
  allSvg.src = allIcon;
  allSvg.classList.add("calendar-icon", "all");
  allTab.appendChild(allSvg);

  const fixedListElement1 = document.createElement("li");
  fixedListElement1.classList.add("today-li");
  fixedListElement1.textContent = "Today";
  unorderedListTop.appendChild(fixedListElement1);

  const todaySvg = new Image();
  todaySvg.src = todayIcon;
  todaySvg.classList.add("calendar-icon");
  fixedListElement1.appendChild(todaySvg);

  const fixedListElement2 = document.createElement("li");
  fixedListElement2.classList.add("week-li");
  fixedListElement2.textContent = "This Week";
  unorderedListTop.appendChild(fixedListElement2);

  const weekSvg = new Image();
  weekSvg.src = weekIcon;
  weekSvg.classList.add("calendar-icon");
  fixedListElement2.appendChild(weekSvg);

  navDivTop.appendChild(unorderedListTop);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectHeadline = document.createElement("h3");
  projectHeadline.classList.add("project-headline");
  projectHeadline.textContent = "Projects";
  projectContainer.appendChild(projectHeadline);

  const plusSvg = new Image();
  plusSvg.src = plusIcon;
  plusSvg.classList.add("project-plus-icon");
  projectContainer.appendChild(plusSvg);
  navDivBottom.appendChild(projectContainer);

  navDivBottom.appendChild(unorderedListBottom);
  navDiv.appendChild(navDivTop);
  navDiv.appendChild(navDivBottom);
  contentDiv.appendChild(navDiv);
}
export default createNav;
