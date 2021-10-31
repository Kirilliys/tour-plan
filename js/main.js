$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

 

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: 'coverflow',
  speed: 700,
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  
});

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click",function () {
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});

//Модальное окно
 var modalButton = $("[data-toggle=modal]");
 var closeModalButton = $(".modal__close");
 modalButton.on("click",openModal);
 closeModalButton.on("click", closeModal);
 
 
 function openModal() {
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   modalOverlay.addClass("modal__overlay--visible");
   modalDialog.addClass("modal__dialog--visible");
 }
 function closeModal(event) {
   event.preventDefault();
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   modalOverlay.removeClass("modal__overlay--visible");
   modalDialog.removeClass("modal__dialog--visible");
 }

$(this).keydown(function(eventObject){
       if (eventObject.which == 27) {
        $('.modal__dialog').removeClass('modal__dialog--visible');
        $('.modal__overlay').removeClass('modal__overlay--visible');
      }

     
  })

//Обработка формы
 $(".form").each(function(){
   $(this).validate({
   errorClass: "invalid",
   messages: {
    name: {
      required: "Please enter a name",
      minlenght: "The name should not be shorter than 2 letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
     phone: {
       required: "Phone is required",
     },
  },
 });
 });

$(".navbar__subscribe").validate({
    errorClass: ".error",
    email: {
       required: "Enter еmail",
    },
  });

});

