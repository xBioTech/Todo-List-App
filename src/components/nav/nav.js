function createNav() {
  const contentDiv = document.getElementById("content");
  const navDiv = document.createElement("div");
  const navDivTop = document.createElement("div");
  const navDivBottom = document.createElement("div");
  navDiv.classList.add("nav");

  const unorderedListTop = document.createElement("ul");
  const unorderedListBottom = document.createElement("ul");

  const fixedListElement1 = document.createElement("li");
  fixedListElement1.textContent = "Today";
  unorderedListTop.appendChild(fixedListElement1);

  const fixedListElement2 = document.createElement("li");
  fixedListElement2.textContent = "This Week";
  unorderedListTop.appendChild(fixedListElement2);

  navDivTop.appendChild(unorderedListTop);

  const projectHeadline = document.createElement("h3");
  projectHeadline.textContent = "Projects";
  navDivBottom.appendChild(projectHeadline);

  const fixedListElement3 = document.createElement("li");
  fixedListElement3.textContent = "Add Project";
  unorderedListBottom.appendChild(fixedListElement3);

  navDivBottom.appendChild(unorderedListBottom);
  navDiv.appendChild(navDivTop);
  navDiv.appendChild(navDivBottom);
  contentDiv.appendChild(navDiv);
}
export default createNav;
