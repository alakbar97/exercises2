$(document).ready(function(){
    $(window).scroll(function(){
    //  var scroll = $(window).scrollTop();
     if ($(window).scrollTop()>150) {
         $(".fixed-top").css({"background":"black"})
     }
     else{
         $(".fixed-top").css({"background":"transparent"})
     }
    });
  });