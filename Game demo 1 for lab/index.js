$(document).ready(function () {
    $("body").append("<div class='main'></div>");
    $(".main").append("<div class='mover'></div>");
    var Mover = document.querySelector(".mover");
    var left1 = 0;
    var top1 = 0;
    $(window).keyup(function move(e) {
        if (e.keyCode == 40 && top1 < 450) {
            top1 = top1 + 50;
            Mover.style.top = top1 + "px";
        }
        if (e.keyCode == 38 && top1 > 0) {
            top1 = top1 - 50;
            Mover.style.top = top1 + "px";
        }
        if (e.keyCode == 37 && left1 > 0) {
            left1 = left1 - 50;
            Mover.style.left = left1 + "px";
        }
        if (e.keyCode == 39 && left1 < 450) {
            left1 = left1 + 50;
            Mover.style.left = left1 + "px";
        }
    })
})