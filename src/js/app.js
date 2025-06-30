import * as functions from './modules/baseFunctions.js';

// import Swiper from 'swiper/bundle';

functions.isWebp();
import './modules/popup/popup.js';



// const lenis = new Lenis({
//   autoRaf: true,
// });

window.addEventListener('DOMContentLoaded', () => {
  const menuElem = document.querySelector('.header-bottom__inner');
  const headerBottomElem = document.querySelector('.header-bottom');
  const menuOffsetTop = menuElem.offsetTop; // Положение от верха документа
  const headerHeight = headerBottomElem.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= menuOffsetTop) {
      headerBottomElem.classList.add('header--fixed');
      document.body.style.paddingTop = `${headerHeight}px`;
    } else {
      headerBottomElem.classList.remove('header--fixed');
      document.body.style.paddingTop = '0px';
    }
  });
});

// const colorsBtn = document.querySelectorAll('.colors__color');
//
// colorsBtn?.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     colorsBtn.forEach((color) => {color.classList.remove('_active');});
//     btn.classList.add('_active');
//     const dataImage = btn.dataset.image;
//
//     const image = document.getElementById('product-image');
//
//     image.src = dataImage;
//     const pictureSource = image.previousElementSibling;
//     pictureSource.srcset = dataImage;
//
//   })
// })

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
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

const imageSlider = new Swiper('.image-slider__slider', {
  loop: true,
  spaceBetween: 12,
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2.4,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40
    }
  }
});

const sliderInfo = new Swiper('.slider-info__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,

  navigation: {
    nextEl: '.slider-info__next',
    prevEl: '.slider-info__prev',
  },
});

const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  document.querySelector('.header-mb').classList.add('_active');
})

const close = document.getElementById("close");
close.addEventListener("click", () => {
  document.querySelector('.header-mb').classList.remove('_active');
})

const fullCharBtn = document.querySelector(".product-page__full-char");
fullCharBtn?.addEventListener("click", (e) => {
  const listCharParent = document.querySelector(".product-page__characteristics");
  const listChar = listCharParent.querySelector("ul");

  listChar.style.height = "auto"
})