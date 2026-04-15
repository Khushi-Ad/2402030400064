$(function () {

  // === FORM SUBMIT ===
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    var $btn = $(this).find("button[type=submit]");
    $btn.prop("disabled", true).text("Sending...");
    setTimeout(function () {
      $btn.text("Sent! 🌿");
      $("#formStatus").removeClass("d-none");
    }, 800);
  });

  // === MOBILE NAV ===
  function openNav() {
    $("#mobileNav").addClass("open");
    $("#navOverlay").addClass("active");
    $("#menuToggle").addClass("open");
    $("body").css("overflow", "hidden");
  }

  function closeNav() {
    $("#mobileNav").removeClass("open");
    $("#navOverlay").removeClass("active");
    $("#menuToggle").removeClass("open");
    $("body").css("overflow", "");
  }

  $("#menuToggle").on("click", openNav);
  $("#menuClose").on("click", closeNav);
  $("#navOverlay").on("click", closeNav);
  $(".mobile-nav-links a").on("click", closeNav);

  // === SCROLL EVENTS ===
  $(window).on("scroll", function () {
    var scrollY = $(this).scrollTop();

    // Scroll-to-top button
    if (scrollY > 400) {
      $("#scrollTop").addClass("visible");
    } else {
      $("#scrollTop").removeClass("visible");
    }

    // Header shadow
    if (scrollY > 10) {
      $(".site-header").addClass("scrolled");
    } else {
      $(".site-header").removeClass("scrolled");
    }

    // Active nav link
    var offset = scrollY + 120;
    $(".nav-links a").removeClass("active");
    $("section[id]").each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      if (offset >= top && offset < bottom) {
        $(".nav-links a[href='#" + $(this).attr("id") + "']").addClass("active");
      }
    });
  });

  // === SCROLL TO TOP ===
  $("#scrollTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

});
