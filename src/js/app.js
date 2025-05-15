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
      slidesPerView: 1,
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

// const lenis = new Lenis({
//   autoRaf: true,
// });

window.addEventListener('scroll', () => {
  const menuPosition = window.scrollY;
  const menuElem = document.querySelector('.header-bottom__inner');
  const topPositionMenuElem = menuElem.getBoundingClientRect().top;
  const headerBottomElem = document.querySelector('.header-bottom');
  const headerBottomElemHeight = headerBottomElem.getBoundingClientRect().height;


  if (menuPosition > topPositionMenuElem) {
    headerBottomElem.classList.add('header--fixed');
    document.documentElement.style.paddingTop = headerBottomElemHeight + "px"
  }else {
    headerBottomElem.classList.remove('header--fixed');
    document.documentElement.style.paddingTop = "0px"
  }
})

const colorsBtn = document.querySelectorAll('.colors__color');

colorsBtn?.forEach((btn) => {
  btn.addEventListener('click', () => {
    colorsBtn.forEach((color) => {color.classList.remove('_active');});
    btn.classList.add('_active');
    const dataImage = btn.dataset.image;

    const image = document.getElementById('product-image');

    image.src = dataImage;
    const pictureSource = image.previousElementSibling;
    pictureSource.srcset = dataImage;

  })
})