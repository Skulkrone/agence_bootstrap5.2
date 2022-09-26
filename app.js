// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


// Configure Slider

// $('.carousel').carousel({
//   interval: 2000,
//   pause: 'null'
// });

const myCarouselElement = document.querySelector('#carouselContent');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  pause: 'null'
});

// Effet Nav

$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $('.navbar').addClass('opaque');
  } else {
    $('.navbar').removeClass('opaque');
  }
});




