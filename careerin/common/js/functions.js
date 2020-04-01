"use strict";

//Jquery.inview.min.js
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});



(function(){

$(document).ready(function(){
/*===================================================
Slick mainSlide
===================================================*/
$('.slide__inner').slick({
  infinite: true,
  autoplay:true,
  fade: true,
  arrows: false,
  dots: true,
  autoplaySpeed:2500,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

  $('.slide__item').each(function(){
    var _slideItem = $(this);
    _slideItem.css({
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'block',
    })
  })

  $('.slide__inner').each(function(){
    var _width = $(window).width();
    if(_width > 768){
       $('.slide__inner').css({
        position: 'fixed',
        display: 'block',
      })
     }else {
        $('.slide__inner').css({
        position: 'reletive',
        display: 'block',
      })
     }
  })
    

/*===================================================
Slick mainSlide
===================================================*/
$('.products__carousel').slick({
  autoplay:true,
  arrows: true,
  dots: true,
  autoplaySpeed:2000,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="products__prev"><img src="common/img/products/btn_prev.gif"/></button>',
  nextArrow: '<button type="button" class="products__next"><img src="common/img/products/btn_next.gif"/></button>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

/*===================================================
Add css item
===================================================*/
  $('.mainSlide__item').each(function(){
  var _this = $(this);
  _this.css({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'block',
  })
  })

/*===================================================
Style Header When Scroll
===================================================*/
var _window = $(window);
var _content = $('.container').offset().top - 100 ;
$(_window).on("load scroll", function() {
   if(_window.scrollTop() > _content) {
      $('.header').addClass('is-active');
    }else {
      $('.header').removeClass('is-active');
    }
})
})
/*===================================================
Button ScrollTop
===================================================*/
$('.footer__pageTop').on('click', function(e) {
    e.preventDefault();
    $('html, boy').animate({
    scrollTop: 0
  }, 900);
});   

/*===================================================
Click toggle 
===================================================*/
  $('.study__answer').css("display","none");
  $('.study__question').click(function(){
    $(this).toggleClass('is-open');
    $(this).next().slideToggle(500);
 })
/*===================================================
Click toggle Page contact
===================================================*/
  $('.faq__answer').css("display","none");
  $('.faq__question').on('click',function(){
    $(this).next('.faq__answer').slideToggle(400);
    $(this).toggleClass('is-active');
  })  

/*===================================================
Click toggle Menu SP
===================================================*/
  $('.nav__btn').click(function(){
    $(this).toggleClass('is-open');
    $(this).next('.nav__list').slideToggle();
  })

/*===================================================
Click open menu header
===================================================*/
$('.nav__btntop').click(function() {
  $('.wrapper').toggleClass('is-active');
})

/*===================================================
Click open item page product in mobile
===================================================*/
 $('.products__color .detail').css('display','none');
 $('.products__color .btn').click(function(){
  $(this).toggleClass('is-open');
  $(this).next('.detail').slideToggle();
 })

  $('.products__flex .detail').css('display','none');
 $('.products__flex .btn').click(function(){
  $(this).toggleClass('is-open');
  $(this).next('.detail').slideToggle();
 })
 
/*===================================================
Fade Element
===================================================*/ 
$('.fadeOutUp').on('inview', function(event, isInview, visiblePartX, visiblePartY) {
  if(isInview) {
    $(this).stop().addClass('fadeIn');
  }
}); 


/*===================================================
Hover for img and text
===================================================*/
// Hover background
function backgroundChange(items) {
  for(var i = 0; i < items.length; i++) {
    var _this = items[i];
    _this.addEventListener('mouseover', function() {
      _this.style.backgroundColor = '#eff2f4';
      _this.style.border = '1px solid #eff2f4';
    });
    _this.addEventListener('mouseout', function() {
      _this.style.backgroundColor = '#ffffff';
    });
  }
}

// Get URL
function imageChange(items) {
  for(var i = 0; i < items.length; i++) {
    var _this = items[i];
    const imageItem = _this.querySelector('img');
    const imageItemSrc = imageItem.getAttribute('src');
    const imageSrc = imageItemSrc.slice(0, (imageItemSrc.length - 4));
    const imageItemSrcEx = imageItemSrc.substring(imageItemSrc.length, (imageItemSrc.length - 4));
    _this.addEventListener('mouseover', function() {
      imageItem.setAttribute('src', imageSrc + '_o' + imageItemSrcEx);
    });
    _this.addEventListener('mouseout', function() {
      imageItem.setAttribute('src', imageItemSrc);
    });
  }
}

// Get Element 
  const sidebarItems = document.querySelectorAll('.info a.info__link');
  imageChange(sidebarItems);

  const sidebarItems2 = document.querySelectorAll('.sidebar__inner li:not(.active) a');
  imageChange(sidebarItems2);

  const sidebarItems3 = document.querySelectorAll('.study__inner a');
  imageChange(sidebarItems3);

  const sidebarItems4 = document.querySelectorAll('.btn a');
  imageChange(sidebarItems4);

  const sidebarItems5 = document.querySelectorAll('.footer__inner a.footer__pageTop');
  imageChange(sidebarItems5);

  const productItems = document.querySelectorAll('.product__box.content ul li');
  backgroundChange(productItems);

  const productItems2 = document.querySelectorAll('.product.clearfix ul li');
  backgroundChange(productItems2);

  const btnHv = document.querySelectorAll('.hv a');
  imageChange(btnHv);


}())

