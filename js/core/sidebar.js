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

function markActivePageMenu() {
    const links = document.querySelectorAll('.page-nav');
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


function resetAllLinks() {
    const links = document.querySelectorAll('.page-nav');
    links.forEach(link => {
        link.classList.remove(
            'bg-gradient-to-r',
            'from-blue-50',
            'to-transparent',
            'border-blue-500',
            'shadow-sm'
        );
        link.classList.add('border-transparent');

        updateDot(link, false);
        updateTitle(link, false);
        updateArrow(link, false);
    });
}

function activateLink(link) {
    link.classList.add(
        'bg-gradient-to-r',
        'from-blue-50',
        'to-transparent',
        'border-blue-500',
        'shadow-sm'
    );
    link.classList.remove('border-transparent');

    updateDot(link, true);
    updateTitle(link, true);
    updateArrow(link, true);
}


function updateDot(link, isActive) {
    const dot = link.querySelector('.rounded-full');

    dot.classList.toggle('bg-blue-500', isActive);
    dot.classList.toggle('scale-150', isActive);
    dot.classList.toggle('shadow-md', isActive);
    dot.classList.toggle('shadow-blue-500/50', isActive);

    dot.classList.toggle('bg-gray-300', !isActive);
}

function updateTitle(link, isActive) {
    const title = link.querySelector('h4');

    title.classList.toggle('text-blue-600', isActive);
    title.classList.toggle('text-gray-700', !isActive);
}

function updateArrow(link, isActive) {
    const arrow = link.querySelector('.icon');
    arrow.classList.toggle('translate-x-1', isActive);
}

export { toggleSidebar, toggleSubmenu, markActivePageMenu }