$(document).ready(function(){
    $(window).scroll(function(){
     if ($(window).scrollTop()>150) {
         $(".fixed-top").css({"background":"black"})
     }
     else{
         $(".fixed-top").css({"background":"transparent"})
     }
    });
$(window).scroll(function () {
    if ($(window).scrollTop()<1) {
        $(".uphead").css({"display":"none"})
    }
    else{
        $(".uphead").css({"display":"block"})
    }
})
  });
