

(function($) {
  "use strict";

  // Scrollspy
  $("body").scrollspy({
    target: "#nav",
    offset: $(window).height() / 2
  });

  // Mobile nav toggle
  $(".navbar-toggle").on("click", function() {
    $(".main-nav").toggleClass("open");
  });

  // Fixed nav
  $(window).on("scroll", function() {
    var wScroll = $(this).scrollTop();
    wScroll > 50
      ? $("#header").addClass("fixed-navbar")
      : $("#header").removeClass("fixed-navbar");
  });

  // Smooth scroll
  $(".main-nav a[href^='#']").on("click", function(e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      800
    );
  });

  // Section title animation
  $(".section-title").each(function() {
    var $this = $(this);
    $this.find(".title > span").each(function(i) {
      var $span = $(this);
      var animated = new Waypoint({
        element: $this,
        handler: function() {
          setTimeout(function() {
            $span.addClass("appear");
          }, i * 250);
          this.destroy();
        },
        offset: "95%"
      });
    });
  });

  // Galery Owl
  $("#galery-owl").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay: true,
    autoplaySpeed: 500,
    navSpeed: 500,
    responsive: {
      0: {
        stagePadding: 0
      },
      768: {
        stagePadding: 120
      }
    }
  });

  // Parallax Background
  $.stellar({
    responsive: true
  });

  // CountTo
  $(".counter").each(function() {
    var $this = $(this);
    var counter = new Waypoint({
      element: $this,
      handler: function() {
        $this.countTo();
      },
      offset: "95%"
    });
  });
})(jQuery);

function prizes(){
  var button = document.getElementById('viewbutton').getAttribute('aria-expanded');
  var buttontext = document.getElementById('viewbutton');
  console.log(button);
  if(button === "true"){
    buttontext.innerHTML = "Show More"; 
  }
   
else {
 buttontext.innerHTML = "Show Less";
}
}
var ctfclick=0;
var logo=document.getElementById("osdhack");
logo.addEventListener("click",function ctfeasteregg(){

ctfclick++;
if(ctfclick==1){
alert("You are getting closer to the secret🤫")
}
if(ctfclick>2)
{
  logo.href="https://osdh-ctf.netlify.app/"
} 
}
)
