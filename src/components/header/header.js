import logoSvg from "../../assets/sticker-check.svg";

function createHeader() {
  const contentDiv = document.getElementById("content");
  const headerDiv = document.createElement("div");
  const headerDivLeft = document.createElement("div");

  headerDivLeft.classList.add("header-left");

  headerDiv.classList.add("header");

  const appLogo = new Image();
  appLogo.src = logoSvg;
  appLogo.classList.add("app-logo");
  headerDivLeft.appendChild(appLogo);

  const headerHeadline = document.createElement("h1");
  headerHeadline.textContent = "TodoList";
  headerDivLeft.appendChild(headerHeadline);

  headerDiv.appendChild(headerDivLeft);

  contentDiv.appendChild(headerDiv);
}
export default createHeader;
