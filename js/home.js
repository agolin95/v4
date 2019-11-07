$(document).ready(function(){
    $(this).scrollTop(0);
    $(".nav").css("opacity", 0);
    $(".nav").css("opacity", 0);
    
    if ($(window).scrollTop() != 0) {
        $(".landing").css("opacity", 0);
    }

    $(window).scroll(function(){
        $(".landing").css("opacity", 1 - $(window).scrollTop() / 700);
        $(".nav").css("opacity", $(window).scrollTop() / 800);
        $(".footer").css("opacity", $(window).scrollTop() / 800);
    });
})