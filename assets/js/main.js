$(function() {
  "use strict";

  //===== Prealoder

  $(window).on("load", function(event) {
    $(".preloader")
      .delay(500)
      .fadeOut(500);
  });

  //===== Sticky

  $(window).on("scroll", function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      if (this.hash != "") {
        var sectionOffset = $(this.hash).offset().top - 73;

        if (sectionOffset <= scrollbarLocation) {
          $(this)
            .parent()
            .addClass("active");
          $(this)
            .parent()
            .siblings()
            .removeClass("active");
        }
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function() {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function() {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  $(".past-active").slick({
    dots: true,
    speed: 800,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function(event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
      $(".back-to-top").removeClass("d-none");
    } else {
      $(".back-to-top").fadeOut(200);
      $(".back-to-top").addClass("d-none");
    }
  });

  //Animate the scroll to top
  $(".back-to-top").on("click", function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0
      },
      1500
    );
  });

  //=====  WOW active

  new WOW().init();
});
