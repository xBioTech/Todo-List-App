function createHome() {
  const contentDiv = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const homeHeadline = document.createElement("h1");
  homeHeadline.classList.add("home-headline");
  homeHeadline.textContent = "Home";
  homeDiv.appendChild(homeHeadline);

  const homeParagraph = document.createElement("p");
  homeParagraph.textContent = "Add your default tasks here";
  homeDiv.appendChild(homeParagraph);

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-btn");
  homeButton.textContent = "Add Task";
  homeDiv.appendChild(homeButton);

  contentDiv.appendChild(homeDiv);
}

export default createHome;
