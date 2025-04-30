import * as functions from './modules/baseFunctions.js';

functions.isWebp();

const  swipes_slider = new Swiper('.slider__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

const catalog_slider = new Swiper('.catalog-slider__swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
