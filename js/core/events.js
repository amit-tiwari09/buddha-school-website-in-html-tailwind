import { closeModal, openModal } from "./modal.js";
import { markActivePageMenu, toggleSidebar, toggleSubmenu } from "./sidebar.js";

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-sidebar")) {
        toggleSidebar()
    }

    if (event.target.classList.contains("has-submenu")) {
        toggleSubmenu(event.target.id);
    }


    // Open modal window
    if (event.target.classList.contains("open-modal")) {
        openModal(event.target.getAttribute("data-targetModalId"));
    }

    // Close modal window
    if (event.target.classList.contains("close-modal")) {
        closeModal(event.target.getAttribute("data-targetModalId"));
    }

})


markActivePageMenu();