//================================
//    Click Big Photo -> Open LightBox
//================================
$(".recruit__gallery li").click(function(){
  $(".recruit__overlay, .recruit__lightbox").fadeToggle();
});


//================================
//    Close the LightBox
//================================
$(".recruit--close, .recruit__overlay").click(function(){
  $(".recruit__overlay, .recruit__lightbox").fadeToggle();
});
/*===================================================
Modal page recruit
===================================================*/

var slideIndex = 1;
showSlides(slideIndex);

var totalSlide = $('.recruit__gallery li').length;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("box");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

$('.recruit--current.counter').html(totalSlide);

