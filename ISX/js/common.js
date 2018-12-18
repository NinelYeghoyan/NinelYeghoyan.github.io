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
    if ($('.help-tab--close').hasClass('open')) $('.help-tab--close').removeClass('open');
    if ($('.help__accordion').hasClass('help__positionLeft')) $('.help__accordion').removeClass('help__positionLeft');
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
//  help tab mobile menu
var func =  function () {
    $('.help-tab--close').toggleClass("open");
    $('.help__accordion').toggleClass("help__positionLeft");
};
var helpTabMobile = $('.help-tab--close');

helpTabMobile.click(function(event) {
    event.stopPropagation();
    if(helpTabMobile.hasClass("open") ===  true){
        $('.body').css("overflow","hidden");
    }else{
        $('.body').css("overflow","scroll");
    }
    func();
});
$(document).click(function (event) {
    const block = $('.help__accordion');
    const block1 = $('.header__list');
    const cards = block[0].childNodes;
    let eventId = $($(event.target).parent()).attr('id');

    for (let i = 0; i < cards.length; i++) {
        if ($(cards[i]).children()[0] &&
            typeof $($(cards[i]).children()[0]).attr('id') !== 'undefined' &&
            typeof eventId !== 'undefined' &&
            $($(cards[i]).children()[0]).attr('id') === eventId) {
            event.stopPropagation();
        }
    }
    if(block1.hasClass("header__positionRight") ===  true){
        $('.body').css("overflow","scroll");
        funct();
    }
    if(block.hasClass("help__positionLeft")){
        $('.body').css("overflow","scroll");
        if (event.isPropagationStopped()) return;
        func();
    }
});





























