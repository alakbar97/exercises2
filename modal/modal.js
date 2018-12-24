$(document).ready(function () {
    $("a").click(function (params) {
        params.preventDefault();
    })
    
    $("button").click(function (params) {
        $(".main").addClass("active")
        $("body").css({"background-color":"rgba(0,0,0,0.4)","margin-left":"200px"})

    })
})