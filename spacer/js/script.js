$=jQuery.noConflict();
$(document).ready(function(){
    // banner window height
    var winHeight = $(window).height();
    var banner = $('.banner');
    banner.css('height', winHeight);
    $(window).resize(function () {
        var winHeight = window.innerHeight;
        banner.height(winHeight);
    });
    // scroll menu hide and show
    var nav = $('#nav');
    var scroll = $('#scroll');
    var linkColor = $('.scrollColor');
    var status = false;
    var header__item = $('.header__item');
    var nav__logo = $('.nav__logo');
    var destination__height = $('.destination');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50 ) {
            if(status ===  true){
                if($(this).scrollTop() < 250){
                    $(window).scrollTop($('.header').height())
                }
                return;
            }
            if($(window).width() <= 1070){
                $('.banner--wrapper').css('display', 'block');
            }else{
                $('.banner--wrapper').css('display', 'none');
            }
            nav.addClass("scroll-nav");
            linkColor.addClass("scroll-color");
            $('.header--wrapper').css('border-color', '#ebebeb');
            //menu before img change
            header__item.removeClass("header__position_white");
            header__item.addClass("header__position_black");
            // menu after img change
            header__item.removeClass("header__position_whiteAfter");
            header__item.addClass("header__position_blackAfter");
            // header logo change
            nav__logo.removeClass("nav__logo-white");
            nav__logo.addClass("nav__logo-black");
            // scroll block height
            destination__height.css("margin-top",$('.header').height() + $('.header').height());
            scroll.hide();
            status =  true;
        } else {
            $('.banner--wrapper').css('display', 'block');
            nav.removeClass("scroll-nav");
            linkColor.removeClass("scroll-color");
            $('.header--wrapper').css('border-color', 'rgba(255, 255, 255, 0.102)');
            //menu before img change
            header__item.removeClass("header__position_black");
            header__item.addClass("header__position_white");
            // menu after img change
            header__item.removeClass("header__position_blackAfter");
            header__item.addClass("header__position_whiteAfter");
            // header logo change
            nav__logo.removeClass("nav__logo-black");
            nav__logo.addClass("nav__logo-white");
            // scroll block height
            destination__height.css("margin-top","0");
            scroll.show();
            status =  false;
        }
    });
    /* popup menu open */
    $('.menu-open').click(function() {
        $('.mob-menu').fadeIn(250);
        $('.body').css("overflow","hidden");
    });
    /* popup push menu back */
    $('.icon-close').click(function() {
        $('.mob-menu').fadeOut(250);
        $('.body').css("overflow","scroll");
    });

    /* Push the nav */
    $('.fixed-barOuter').click(function() {
        $('.banner-form--popup').animate({
            left: "0px"
        }, 200);
        $('body').animate({
            left: "100%"
        }, 200);
        $('.body').css("overflow","hidden");
    });
    /* Then push them back */
    $('.icon-close').click(function() {
        $('.banner-form--popup').animate({
            left: "-100%"
        }, 200);
        $('body').animate({
            left: "0px"
        }, 200);
        $('.body').css("overflow","scroll");
    });

    // dropdown languagepicker
    $('.click-lang').click( function(event){
        event.stopPropagation();
        $('.header__languagepicker').slideToggle();
    });

    $(document).click( function(){
        $('.header__languagepicker').hide();
    });

    // dropdown moneypicker
    $('.click-money').click( function(event){
        event.stopPropagation();
        $('.header__moneypicker').slideToggle();
    });

    $(document).click( function(){
        $('.header__moneypicker').hide();
    });

    // popup open and close
    $(".popup-click--log").click(function(){
        $(".popup--log").fadeIn();
        $('.body').css("overflow","hidden");
    });

    $(".popup-close").click(function(){
        $(".popup").fadeOut();
        $('.body').css("overflow","scroll");
    });
});






















