import alertIcon from "../../assets/alert-remove.svg";

function deleteModal(element) {
  const contentDiv = document.getElementById("content");

  const deleteModalDiv = document.createElement("div");
  deleteModalDiv.classList.add("delete-modal", "delete-opened");

  const deleteModalHeader = document.createElement("div");
  deleteModalHeader.classList.add("delete-modal-header");

  const headerHeadline = document.createElement("h1");
  headerHeadline.textContent = "Confirm Delete";
  deleteModalHeader.appendChild(headerHeadline);

  const alertSvg = new Image();
  alertSvg.src = alertIcon;
  alertSvg.classList.add("alert-icon");
  deleteModalHeader.appendChild(alertSvg);

  deleteModalDiv.appendChild(deleteModalHeader);

  const deleteModalWarning = document.createElement("div");
  deleteModalWarning.classList.add("delete-modal-warning");

  const warningText = document.createElement("p");
  warningText.textContent =
    `Are you sure you want to delete this ${element} Please confirm your choice, or cancel and return to the page.`;
  deleteModalWarning.appendChild(warningText);

  deleteModalDiv.appendChild(deleteModalWarning);

  const deleteModalButtons = document.createElement("div");
  deleteModalButtons.classList.add("delete-modal-buttons");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.textContent = "Cancel";
  deleteModalButtons.appendChild(cancelBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("modal-delete-btn");
  deleteBtn.textContent = "Delete";
  deleteModalButtons.appendChild(deleteBtn);

  deleteModalDiv.appendChild(deleteModalButtons);

  contentDiv.appendChild(deleteModalDiv);
}

export default deleteModal;
