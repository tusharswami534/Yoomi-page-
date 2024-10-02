// Nav bar 
const navmenu = () => {
  document.getElementById("mobile-view").classList.toggle("max-md:top-0");
  document.getElementById("mobile-view").classList.toggle("max-md:right-0");
  document.getElementById("nav-line").classList.toggle("rotate-45");
  document.getElementById("nav-line").classList.toggle("after:rotate-90");
  document.getElementById("nav-line-out-side").classList.toggle("translate-x-6");
  document.getElementById("nav-line-out-side-1").classList.toggle("translate-x-6");
  document.body.classList.toggle("overflow-hidden");
}

//  Extensive Exercise Library
$('.features-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow: ".next",
  prevArrow: ".prev",
});

// Know More Slider
$(document).ready(function () {
  $('.know-more-big-screen').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.know-more-small-screen',
    infinite: true,
  });

  $('.know-more-small-screen').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.know-more-big-screen',
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});
