// menu section
$(document).ready(function(){

    $(".menu-open").click(function () {

        $(".nav__box").slideToggle();
    });

    $(".popup-click--reg").click(function(){
        $(".popup--reg").fadeIn();
    });

    $(".popup-click--log").click(function(){
        $(".popup--log").fadeIn();
    });

    $(".popup-close").click(function(){
        $(".popup").fadeOut()
    });
});
// Owl carousel
window.onload = function () {
    $('.carousel1').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            }
        }
    });
};
// progress bar
$(document).ready(function() {
    $('.loader').ClassyLoader({
        percentage: 47,
        speed: 50,
        fontSize: '32px',
        diameter: 80,
        lineColor: '#019a03',
        fontColor: '#fff',
        remainingLineColor: '#ffffff',
        lineWidth: 3
    });
    $('.loader2').ClassyLoader({
        percentage: 30,
        speed: 50,
        fontSize: '32px',
        diameter: 80,
        lineColor: '#019a03',
        fontColor: '#fff',
        remainingLineColor: '#ffffff',
        lineWidth: 3
    });

    $('.loader3').ClassyLoader({
        percentage: 75,
        speed: 50,
        fontSize: '32px',
        diameter: 80,
        lineColor: '#019a03',
        fontColor: '#fff',
        remainingLineColor: '#ffffff',
        lineWidth: 3
    });
});



