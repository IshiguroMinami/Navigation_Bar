$(function() {
  const $window = $(window);
  const $navbar = $('#navbar');
  let navbarOffset = $navbar.offset().top;
  let resizeTimeout = null;

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
