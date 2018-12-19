$(document).ready(function () {
    $(".picture1").hover(function() {
        $(".img1").attr({"src":"cat.jpg"})
        $(".picture1").css("opacity","1").nextAll().css("opacity","0.5")
    })
    $(".picture2").hover(function() {
        $(".img2").attr({"src":"cl.jpg"})
        $(".picture2").css("opacity","1").siblings().css("opacity","0.5")
    })
    $(".picture3").hover(function() {
        $(".img3").attr({"src":"h4.jpg"})
        $(".picture3").css("opacity","1").siblings().css("opacity","0.5")
    })
    $(".picture4").hover(function() {
        $(".img4").attr({"src":"pl.jpg"})
        $(".picture4").css("opacity","1").siblings().css("opacity","0.5")
    })
    $(".picture5").hover(function() {
        $(".img5").attr({"src":"rw.jpg"})
        $(".picture5").css("opacity","1").siblings().css("opacity","0.5")
    })
    $(".picture6").hover(function() {
        $(".img6").attr({"src":"sh.jpg"})
        $(".picture6").css("opacity","1").prevAll().css("opacity","0.5")
    })
    $(".picture1").click(function() {
        $(".imgMain").attr({"src":"cat.jpg"})
    })
    $(".picture2").click(function() {
        $(".imgMain").attr({"src":"cl.jpg"})
    })
    $(".picture3").click(function() {
        $(".imgMain").attr({"src":"h4.jpg"})
    })
    $(".picture4").click(function() {
        $(".imgMain").attr({"src":"pl.jpg"})
    })
    $(".picture5").click(function() {
        $(".imgMain").attr({"src":"rw.jpg"})
    })
    $(".picture6").click(function() {
        $(".imgMain").attr({"src":"sh.jpg"})
    })
})