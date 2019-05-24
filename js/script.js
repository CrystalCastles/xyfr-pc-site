$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

  AOS.init();

  $('.each-review').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});