// swipper
new Swiper(".gallerySwiper", {
    slidesPerView: 6,
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 7680px
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar_top');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// CounterUp  JS
$(window).on('scroll', function () {
    function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
            winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
        return scrollPosition;
    }
    var elemOffset = $('.odometer').offset().top
    if (elemOffset < winScrollPosition()) {

        $('.odometer').each(function () {
            $(this).html($(this).data('count-to'));
        });
    }
});