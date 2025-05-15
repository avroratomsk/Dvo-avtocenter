import * as functions from './modules/baseFunctions.js';

// import Swiper from 'swiper/bundle';

functions.isWebp();




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