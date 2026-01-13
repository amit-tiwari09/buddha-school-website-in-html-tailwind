import { closeModal, openModal } from "./modal.js";
import { markActivePageMenu, toggleSidebar, toggleSubmenu } from "./sidebar.js";

document.addEventListener("click", function (event) {
  // Toggle sidebar when an element with "toggle-sidebar" class is clicked
  if (event.target.classList.contains("toggle-sidebar")) {
    toggleSidebar();
  }

  // Toggle submenu when an element with "has-submenu" class is clicked
  if (event.target.classList.contains("has-submenu")) {
    toggleSubmenu(event.target.id);
  }

  // Open modal when an element with "open-modal" class is clicked
  if (event.target.classList.contains("open-modal")) {
    openModal(event.target.getAttribute("data-targetModalId"));
  }

  // Close modal when an element with "close-modal" class is clicked
  if (event.target.classList.contains("close-modal")) {
    closeModal(event.target.getAttribute("data-targetModalId"));
  }
});

// Highlight the active page link in the menu based on the current URL
markActivePageMenu();
