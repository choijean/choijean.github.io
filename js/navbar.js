$(document).ready(function () {
  // Closes the navbar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#navbar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('#navbar-wrapper').click(function () {
    $("#navbar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });
  if ($(window).width() > 991) {
    $(window).on("load", function (e) {
      $("body").addClass("active");
    })
  }
});

