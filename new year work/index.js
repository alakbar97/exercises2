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
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 1700) {
        $(window).off("scroll", startCounter);
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 7000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}


  });
