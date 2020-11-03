$(document).ready(function () {
  // Open/closes the navbar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#navbar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });
  // Smoothscroll script
  $(".scroll").click(function (e) {
    e.preventDefault();
    var dis = $(this),
      target = dis.attr("href"),
      offset = parseInt($(target).offset().top),
      header = $(".navbar");
    dis.addClass("active").parent().siblings().find(".scroll").removeClass("active");
    $('html,body').stop().animate({ scrollTop: offset }, 200);
  });
  // Closes menu on click
  $('#navbar-wrapper').click(function () {
    $("#navbar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });
  // if ($(window).width() > 991) {
  //   $(window).on("load", function (e) {
  //     $("body").addClass("active");
  //   })
  // }

  // Detect if window has been scrolled
  $(window).scroll(function () {
    var $win = $(window);
    if ($win.scrollTop() > 200) {
      // $('.up-arrow').addClass('active');
      $('.go-to-top').addClass('active');
    } else {
      // $('.up-arrow').removeClass('active');
      $('.go-to-top').removeClass('active');
    }
  });

  // Scroll to top
  $('.go-to-top').click(function (e) {
    e.preventDefault();
  })
});

