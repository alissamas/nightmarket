// nav toggle
var $navToggle = $('.nav-toggle');
var $mainNavUl = $('.mobile-toggle');
var $window = $(window);
var mobileBreakpoint = 750;

$navToggle.on('click', function() {
  $mainNavUl.slideToggle();
  $navToggle.toggleClass('active');
});

$window.on('resize', function() {
  if ($window.width() > mobileBreakpoint) {
    $mainNavUl.show();
    $navToggle.addClass('active');
  }
});

// leaf movement
$(".leaf").mouseover(function(){
    $(".leaf").css("transform", "rotate(3deg)");
});

$(".leaf").mouseout(function(){
    $(".leaf").css("transform", "rotate(-3deg)");
});

$(".leaf-2").mouseover(function(){
    $(".leaf").css("transform", "rotate(3deg)");
});

$(".leaf-2").mouseout(function(){
    $(".leaf").css("transform", "rotate(-3deg)");
});

// past events load more
$(document).ready(function () {
    $('.past-event-gallery li:lt(6)').show();
    $('.less').hide();
    var items =  10;
    var shown =  6;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.past-event-gallery li:visible').length+2;
        if(shown< items) {$('.past-event-gallery li:lt('+shown+')').show(300);}
        else {$('.past-event-gallery li:lt('+items+')').show(300);
             $('.more').hide();
             }
    });
});

// ScrollTrigger
window.counter = function() {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector('span');
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};

document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
    addHeight: true
  });
});
