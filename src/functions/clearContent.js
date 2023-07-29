function clearContent() {
  const mainContentDiv = document.querySelector(".main-content");
  while (mainContentDiv.firstChild) {
    mainContentDiv.removeChild(mainContentDiv.firstChild);
  }
}

export default clearContent;
