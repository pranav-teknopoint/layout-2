$(document).ready(function () {
  $(".testimonial-content").slick({
    dots: true,
    slidestoShow: 3,
    infinite: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function initSlick() {
    $(".key-benefits").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  function destroySlick() {
    if ($(".key-benefits").hasClass("slick-initialized")) {
      $(".key-benefits").slick("unslick");
    }
  }
  if (window.matchMedia("(max-width: 767px)").matches) {
    initSlick();
  }
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  mediaQuery.addEventListener(function () {
    if (mediaQuery.matches) {
      initSlick();
    } else {
      destroySlick();
    }
  });
});
