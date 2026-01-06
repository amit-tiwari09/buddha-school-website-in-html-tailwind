
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 16,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-sidebar")) {
        document
            .getElementById("sidebar")
            .classList.toggle("-translate-x-full");
    }

    if (event.target.classList.contains("has-submenu")) {
        toggleSubmenu(event.target.id);
    }
})



function toggleSubmenu(id) {
    const submenu = document.getElementById(id + "-submenu");
    const icon = document.getElementById(id + "-icon");
    submenu.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
}


