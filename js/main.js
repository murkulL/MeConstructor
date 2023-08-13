$(document).ready(function() {
  $('.articles__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      }
    ]
  });

  initPlansSlider();
});

let plansSlider;

function initPlansSlider() {
  plansSlider = $('.slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 700,
        settings: "unslick" 
      }
    ]
  });
}

function destroyPlansSlider() {
  if (plansSlider) {
    plansSlider.slick("unslick");
    plansSlider = null;
  }
}

function checkWindowWidth() {
  if ($(window).width() >= 700) {
    destroyPlansSlider();
  } else {
    initPlansSlider();
  }
}

$(document).ready(function() {
  initPlansSlider();
  checkWindowWidth();
});

$(window).on('resize', function() {
  checkWindowWidth();
});