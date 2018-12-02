window.onload = function () {
    $('.carousel1').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        dots:false,
        items: 1,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            }
        }
    });
};

// menu
$(document).ready(function(){

    $("#menu-open").click(function () {

        $(".header--menu-log-menu").slideToggle();

    });
    $("#job-menu").click(function () {

        $(".job-nav__menu").slideToggle();

    });
});