function toggleSidebar() {
    document
        .getElementById("sidebar")
        .classList.toggle("-translate-x-full");
}


function toggleSubmenu(id) {
    const submenu = document.getElementById(id + "-submenu");
    const icon = document.getElementById(id + "-icon");
    submenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
}

export { toggleSidebar, toggleSubmenu }