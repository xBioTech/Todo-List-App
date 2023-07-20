import menuSvg from "../../assets/menu.svg";

function createHamburgerIconOnMobile() {
  const headerDiv = document.querySelector(".header");
  const headerDivRight = document.createElement("div");
  headerDivRight.classList.add("header-right");

  const hamburgerIcon = new Image();
  hamburgerIcon.src = menuSvg;
  hamburgerIcon.classList.add("hamburger-icon");
  headerDivRight.appendChild(hamburgerIcon);

  headerDiv.appendChild(headerDivRight);
}

export default createHamburgerIconOnMobile;
