$(document).ready(function () {
    // auth banner window height
    var winHeight = $(window).height();
    $('.auth-banner, .auth-banner-2').css('height', winHeight);
    $(window).resize(function () {
        var winHeight = window.innerHeight;
        $(".auth-banner, .auth-banner-2").height(winHeight);
    });
});

// ------ header menu part -------
var funct =  function () {
    $('.header-mobile').toggleClass("open");
    $('.header__list').toggleClass("header__positionRight");
};
var headerMobile = $('.header-mobile');
headerMobile.click(function(event) {
    funct();
    event.stopPropagation();
    if(headerMobile.hasClass("open") ===  true){
        $('.body').css("overflow","hidden");
    }else{
        $('.body').css("overflow","scroll");
    }
});
$(document).click(function (event) {
    var block = $('.header__list');
    if(block.hasClass("header__positionRight") ===  true){
        $('.body').css("overflow","scroll");
        funct();
    }
});

//  help tab mobile menu
var func =  function () {
    $('.help-tab--close').toggleClass("open");
    $('.help__accordion').toggleClass("help__positionLeft");
};
var helpTabMobile = $('.help-tab--close');
helpTabMobile.click(function(event) {
    func();
    event.stopPropagation();
    if(helpTabMobile.hasClass("open") ===  true){
        $('.body').css("overflow","hidden");
    }else{
        $('.body').css("overflow","scroll");
    }
});
$(document).click(function (event) {
    var block = $('.help__accordion');
    if(block.hasClass("help__positionLeft") ===  true){
        $('.body').css("overflow","scroll");
        func();
    }
});





























