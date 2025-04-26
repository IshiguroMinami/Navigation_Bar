$(function() {
  var $window = $(window);
  var $navbar = $('#navbar');
  var navbarOffset = $navbar.offset().top;
  var resizeTimeout = null;

  function checkNavbarFixed() {
    if ($window.scrollTop() >= navbarOffset) {
      $navbar.addClass('fixed');
    } else {
      $navbar.removeClass('fixed');
    }
  }

  $window.on('scroll', checkNavbarFixed);

  $window.on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      $navbar.removeClass('fixed');
      navbarOffset = $navbar.offset().top;
      checkNavbarFixed();
    }, 200);
  });

  $window.on('load', function() {
    checkNavbarFixed();
  });
});
