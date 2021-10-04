const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  effect: 'coverflow',
  speed: 1000,
  
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});