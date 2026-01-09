import { toggleSidebar, toggleSubmenu } from "./sidebar.js";

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-sidebar")) {
        toggleSidebar()
    }

    if (event.target.classList.contains("has-submenu")) {
        toggleSubmenu(event.target.id);
    }
})