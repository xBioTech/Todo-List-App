import homeIcon from "../../assets/home-plus.svg";
import plusIcon from "../../assets/plus-circle.svg";

function createHome() {
  const contentDiv = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("main-content", "home");

  const homeHeadlineContainer = document.createElement("div");
  homeHeadlineContainer.classList.add("headline-container");

  const homeSvg = new Image();
  homeSvg.src = homeIcon;
  homeSvg.classList.add("main-home-icon");
  homeHeadlineContainer.appendChild(homeSvg);

  const homeHeadline = document.createElement("h1");
  homeHeadline.classList.add("home-headline");
  homeHeadline.textContent = "Home";
  homeHeadlineContainer.appendChild(homeHeadline);
  homeDiv.appendChild(homeHeadlineContainer);

  const homeButtonDiv = document.createElement("div");
  homeButtonDiv.classList.add("home-btn-div");

  const homeParagraph = document.createElement("p");
  homeParagraph.textContent = "Add your default tasks here";
  homeButtonDiv.appendChild(homeParagraph);

  const plusSvg = new Image();
  plusSvg.src = plusIcon;
  plusSvg.classList.add("main-plus-icon");
  homeButtonDiv.appendChild(plusSvg);

  homeDiv.appendChild(homeButtonDiv);

  contentDiv.appendChild(homeDiv);
}

export default createHome;
