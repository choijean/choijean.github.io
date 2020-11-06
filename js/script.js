$(document).ready(function () {

  // Enable tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // Open/closes the navbar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#navbar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
    // TO DO: Change title to 'close' when active
  });
  // Smooth scroll
  $(".scroll").click(function (e) {
    e.preventDefault();
    target = $(this).attr("href"),
      offset = parseInt($(target).offset().top),
      header = $(".navbar");
    $(this).addClass("active").parent().siblings().find(".scroll").removeClass("active");
    $('html,body').stop().animate({ scrollTop: offset }, 200);
  });
  // Closes menu on click
  $('#navbar-wrapper').click(function () {
    $("#navbar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Detect if window has been scrolled (for gototop button)
  $(window).scroll(function () {
    var $win = $(window);
    $('.go-to-top').toggleClass('active', $win.scrollTop() > 200);
  });

  // Scroll to top
  $('.go-to-top').click(function (e) {
    e.preventDefault();
  })


});

