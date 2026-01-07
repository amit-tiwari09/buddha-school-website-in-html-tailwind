
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


    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    var swiper = new Swiper(".mySwiper2", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-scnd-button-next",
            prevEl: ".swiper-scnd-button-prev",
        },
        pagination: {
            el: ".swiper-scnd-pagination",
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        // on: {
        //     autoplayTimeLeft(s, time, progress) {
        //         progressCircle.style.setProperty("--progress", 1 - progress);
        //         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        //     }
        // }
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


