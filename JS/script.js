$(function() {
  var $navbar = $('#navbar');
  var navbarOffset = $navbar.offset().top;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= navbarOffset) {
      $navbar.addClass('fixed');
    } else {
      $navbar.removeClass('fixed');
    }
  });

  $(window).on('resize', function() {
    navbarOffset = $navbar.offset().top;
  });
});
