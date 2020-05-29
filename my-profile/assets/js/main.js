"use strict";

(function () {
  'use strict';
  /*----------------------------------------
  	Detect Mobile
  ----------------------------------------*/

  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  var nextScroll = function nextScroll() {
    $('.js-next').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 700, 'easeInOutExpo');
    });
    $(window).scroll(function () {
      var $this = $(this),
          st = $this.scrollTop();

      if (st > 10) {
        $('.js-next').addClass('sleep');
      } else {
        $('.js-next').removeClass('sleep');
      }
    });
  };
  /*----------------------------------------
  	Burger Menu
  ----------------------------------------*/


  var mobileMenuControl = function mobileMenuControl() {
    // click burger menu
    $('.burger-menu').on('click', function (e) {
      e.preventDefault();

      if ($('body').hasClass('show')) {
        $('.burger-menu').removeClass('active');
        $('body').removeClass('show');
      } else {
        $('.burger-menu').addClass('active');
        $('body').addClass('show');
      }
    }); // if ($(window).width() > 766) {
    // 	$('body').removeClass('mobile-menu-active');
    // 	$('.burger-menu').removeClass('active');
    // } else {
    // 	$('body').addClass('mobile-menu-active');
    // }
    //
    // $(window).resize(function () {
    // 	if ($(window).width() > 766) {
    // 		$('body').removeClass('mobile-menu-active show');
    // 		$('.burger-menu').removeClass('active');
    // 	} else {
    // 		$('body').addClass('mobile-menu-active');
    // 	}
    // }); // Click outside of the Mobile Menu content

    $(document).click(function (e) {
      var container = $(".nav, .burger-menu");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('show')) {
          $('body').removeClass('show');
          $('.burger-menu').removeClass('active');
        }
      }
    });
  };
  /*----------------------------------------
  	Menu Hover
  ----------------------------------------*/


  var menuHover = function menuHover() {
    if (!isMobile.any()) {
      $('.navbar .navbar-nav li.dropdown').hover(function () {
        $(this).find('> .dropdown-menu').stop(true, true).delay(200).fadeIn(500).addClass('animated-fast fadeInUp');
      }, function () {
        $(this).find('> .dropdown-menu').stop(true, true).fadeOut(200).removeClass('animated-fast fadeInUp');
      });
    }
  };
  /*----------------------------------------
  	Content Animation
  ----------------------------------------*/


  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $('.animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            }, k * 100, 'easeInOutExpo');
          });
        }, 200);
      }
    }, {
      offset: '95%'
    });
  };
  /*----------------------------------------
  	Counter Animation
  ----------------------------------------*/


  var loaderPage = function loaderPage() {
    $(".loader").fadeOut("slow");
  };

  var goToTop = function goToTop() {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      return false;
    });
    $(window).scroll(function () {
      var $win = $(window);

      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };
  /*----------------------------------------
  	Document Ready
  ----------------------------------------*/


  $(document).ready(function () {
    menuHover();
    contentWayPoint();
    mobileMenuControl();
    nextScroll();
    loaderPage();
    goToTop();
  });
})();