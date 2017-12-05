import $ from 'jquery';

$(document).ready(function () {
  var $scene = $('.curtain');
  
  $('.curtain').on("mousewheel DOMMouseScroll touchmove", function (e) {
    
    var scrollingDown = (function () {
      var delta,
          compareEvent;
      
      if (e.type ==='touchmove') {
        compareEvent = 'touchmove';
      } else {
        compareEvent = 'DOMMouseScroll';
      }
      
      delta = e.type === compareEvent ?
              e.originalEvent.detail * -40 :
              e.originalEvent.wheelDelta; 
      
      return delta > 0 ? 0 : 1;
    }());

    if (scrollingDown) {
      $scene.addClass('on');
      e.preventDefault();
    } else {
      $scene.removeClass('on');
    }
  });
}); 