const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

/*=================================
Hero Section Slider
===================================*/
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

/*=================================
Message Section Slider
===================================*/
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

/*=================================
Review Section Slider
===================================*/
new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2, // md
    },
    1024: {
      slidesPerView: 3, // lg
    },
  },

  navigation: {
    nextEl: ".swiper-thrd-button-next",
    prevEl: ".swiper-thrd-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-thrd-pagination",
    clickable: true,
  },
});
