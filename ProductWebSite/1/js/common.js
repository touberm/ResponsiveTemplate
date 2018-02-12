$(function(){

// banner
  var screenW = $(window).width();
  console.log(screenW);

  $('.banner .carousel').css({'width':screenW*2});
  $('.banner .carousel li').css({'width':screenW});
  $('.banner .carousel li a').css({'width':screenW});
  
})