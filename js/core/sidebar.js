/*=======================================================
  Toggles the sidebar visibility by adding/removing the
   "-translate-x-full" class
========================================================== */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("-translate-x-full");
}

/*================================================================
 Toggles a submenu's visibility and rotates its icon when clicked
================================================================== */
function toggleSubmenu(id) {
  const submenu = document.getElementById(id + "-submenu");
  const icon = document.getElementById(id + "-icon");
  submenu.classList.toggle("hidden");
  icon.classList.toggle("rotate-90");
}

/*===================================================================
 Highlights the active page link in the menu based on the current URL
===================================================================== */
function markActivePageMenu() {
  const links = document.querySelectorAll(".page-nav");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (
      currentPath.endsWith(href) ||
      currentPath.includes(href.replace(/^\//, ""))
    ) {
      resetAllLinks();
      activateLink(link);
    }
  });
}

/*===================================================================
 Resets all page navigation links to their default, non-active state
===================================================================== */
function resetAllLinks() {
  const links = document.querySelectorAll(".page-nav");
  links.forEach((link) => {
    link.classList.remove(
      "bg-gradient-to-r",
      "from-blue-50",
      "to-transparent",
      "border-blue-500",
      "shadow-sm"
    );
    link.classList.add("border-transparent");

    updateDot(link, false);
    updateTitle(link, false);
    updateArrow(link, false);
  });
}

/*========================================================================
 Activates a page navigation link, applying styles and indicators for the
  active state
========================================================================== */
function activateLink(link) {
  link.classList.add(
    "bg-gradient-to-r",
    "from-blue-50",
    "to-transparent",
    "border-blue-500",
    "shadow-sm"
  );
  link.classList.remove("border-transparent");

  updateDot(link, true);
  updateTitle(link, true);
  updateArrow(link, true);
}

/*=============================================================================
 Updates the small dot indicator inside a navigation link based on active state
=============================================================================== */
function updateDot(link, isActive) {
  const dot = link.querySelector(".rounded-full");

  dot.classList.toggle("bg-blue-500", isActive);
  dot.classList.toggle("scale-150", isActive);
  dot.classList.toggle("shadow-md", isActive);
  dot.classList.toggle("shadow-blue-500/50", isActive);

  dot.classList.toggle("bg-gray-300", !isActive);
}

/*=============================================================================
Updates the title text color of a navigation link based on its active state
=============================================================================== */
function updateTitle(link, isActive) {
  const title = link.querySelector("h4");

  title.classList.toggle("text-blue-600", isActive);
  title.classList.toggle("text-gray-700", !isActive);
}

/*=============================================================================
Updates the arrow icon inside a navigation link based on its active state
=============================================================================== */
function updateArrow(link, isActive) {
  const arrow = link.querySelector(".icon");
  arrow.classList.toggle("translate-x-1", isActive);
}

export { toggleSidebar, toggleSubmenu, markActivePageMenu };
