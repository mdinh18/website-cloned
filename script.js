
// Hero slider
new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 900,
  autoplay: { delay: 5500, disableOnInteraction: false },
  pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' },
});

// News slider
new Swiper('.news-swiper', {
  loop: true,
  spaceBetween: 26,
  slidesPerView: 1,
  autoplay: { delay: 4500, disableOnInteraction: false },
  pagination: { el: '.news-swiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.news-swiper .swiper-button-next', prevEl: '.news-swiper .swiper-button-prev' },
  breakpoints: {
    700: { slidesPerView: 2 },
    1000: { slidesPerView: 3 }
  }
});

// WOW.js scroll reveal
new WOW().init();


