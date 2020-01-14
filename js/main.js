$(document).ready(function(){
    home()
    hashslingingslasher()

    $(window).scroll(function(){
        if (window.location.hash == "#home") {
            $(".landing").css("opacity", 1 - $(window).scrollTop() / 700);
            $(".bar").css("visibility", "visible");
            $(".bar").css("opacity", $(window).scrollTop() / 800);
            if ($(window).scrollTop() == 0) {
                $(".bar").css("visibility", "hidden");
            }
        }
    });
})

window.onhashchange = hashslingingslasher;

function hashslingingslasher() {
    hash = window.location.hash;
    page = hash.substr(1, hash.length);
    $(".wrapper").load(page+".html");
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
}

function pageload(page) {
    $(this).scrollTop(0);
    window.location.hash = page;
    $(".bar").css("visibility", "visible");
    $(".bar").css("opacity", 1);
    $(".wrapper").load(page+".html");
    modal();

}

function home() {
    $(this).scrollTop(0);
    window.location.hash = "home";
    $(".bar").css("visibility", "hidden");
    $(".bar").css("opacity", 0);
    modal();
}

function modal(item) {
    if (item != null) {
        $(".modal").css("visibility", "visible");
    }
    else { 
        $(".modal").css("visibility", "hidden");

    }
}