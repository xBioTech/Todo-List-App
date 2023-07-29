import createHome from "../components/homeSection/home";
import createToday from "../components/todaySection/today";
import createWeek from "../components/weekSection/thisWeek";
import clearContent from "./clearContent.js";

function switchTabs() {
  const homeLi = document.querySelector(".home-li");
  const todayLi = document.querySelector(".today-li");
  const weekLi = document.querySelector(".week-li");

  homeLi.addEventListener("click", () => {
    clearContent();
  });

  todayLi.addEventListener("click", () => {
    clearContent();
  });

  weekLi.addEventListener("click", () => {
    clearContent();
  });
}

export default switchTabs;
