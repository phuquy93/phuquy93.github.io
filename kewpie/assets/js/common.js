"use strict";

var mySwiper = new Swiper('.mainVisual', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var mySwiper = new Swiper('.product-mainSlide', {
  loop: true,
  speed: 1000,
  slidesPerView: 2,
  centeredSlides: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});