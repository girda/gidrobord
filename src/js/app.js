import animation from './components/animation.js';
import 'slick-carousel';
// import order from './components/order';
// import Counter from './classes/Counter';
// import initBag from './components/bag';



const counters = document.querySelectorAll('.js-counter');
if (counters.length) counters.forEach(counter => new Counter(counter));


// initBag();
// animation();
// order();

$('.js-hero-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  // fade: true,
  cssEase: 'linear'
});

// $('.js-comments-slider').slick({
//   slidesToShow: 4
// });

$('.js-burger').click(() => {
  $('.js-mob-menu').toggleClass('is-active');
});


function adaptiveSliders(el,elClass) {
  if(window.matchMedia('(min-width: 768px)').matches) {
    if($(el + slickInit).length >= 1) {
      $(el).slick('unslick');
    }
  } else {
    $(el).not(slickInit).slick({
      slidesToShow: 1,
      // prevArrow: '<button class="' + elClass + '__btn-prev" type="button"></button>',
      // nextArrow: '<button class="' + elClass + '__btn-next" type="button"></button>'

    });
  }
}
let slickInit = '.slick-initialized';
adaptiveSliders('.js-slider-borts');

$(window).on('resize',function() {
  adaptiveSliders('.js-slider-borts');
});


const burger = document.querySelector('.js-burger');
const mainNav = document.querySelector('.js-main-nav');

burger.addEventListener('click', () => {
  mainNav.classList.toggle('is-show');
  burger.classList.toggle('is-active');
});
