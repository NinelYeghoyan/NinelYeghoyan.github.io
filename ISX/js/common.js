$(document).ready(function () {
    // auth banner window height
    var winHeight = $(window).height();
    $('.auth-banner, .auth-banner-2').css('height', winHeight);
    $(window).resize(function () {
        var winHeight = window.innerHeight;
        $(".auth-banner, .auth-banner-2").height(winHeight);
    });
    // Addresses page add account
    $(".addresses__add__btn").click(function() {
        $(".addresses__account--edit").next(".dropdown-btn__list").hide();
        $(this).next(".dropdown-btn__list").toggle();
    });
    // Addresses page edit account
    $(".addresses__account--edit").click(function() {
        $(".addresses__add__btn").next(".dropdown-btn__list").hide();
        $(".addresses__account--edit").not(this).next(".dropdown-btn__list").hide();
        $(this).next(".dropdown-btn__list").toggle();
    });
    // log out dropdown
    $(".header__userMail").click(function() {
        $(this).find(".header__userMail__list").toggle();
    });
    // settings generate Btn
    $(".settings__generateBtn").click(function() {
        setTimeout(function(){
            $(".settings__generateText").toggle();
        }, 2000);
    });
    // loader
    $(".loader-btn").click(function() {
        $(".loader").css("display", "flex");
        $('.body').css("overflow","hidden");
        setTimeout(function(){
            $(".loader").css("display", "none");
            $('.body').css("overflow","auto");
        }, 2000);
    });
    // loader for table
    $(".pagination__link").click(function() {
        $(this).parent().find(".pagination__link").removeClass("pagination--active");
        $(this).addClass("pagination--active");
        $(this).parents(".table-pagination").find(".overlay-md").css("display", "flex");
        setTimeout(function(){
            $(".overlay-md").css("display", "none");
        }, 2000);
    });
    // loader for tabs changes
    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
        var id=$(this).attr('href');
        $(id).find(".tab-overlay").children(".overlay-md").css("display", "flex");
        setTimeout(function(){
            $(".overlay-md").css("display", "none");
        }, 2000);
    });

    // plugin option
    $('.js-example-basic-single').select2({
        width: 'resolve' // need to override the changed default
    });
    $("select").select2({minimumResultsForSearch: -1});
    // history page change table content
    $('#history__drop').change(function(){
        let value = $(this).val();
        $(".history-table").hide();
        $("#"+ value).show();
        $(".table-lg-body .overlay-md").css("display", "flex");
        $(".table-sm .overlay-md").css("display", "flex");
        setTimeout(function(){
            $(".overlay-md").css("display", "none");
        }, 2000);
    });
    // Dashboard activity dropdown loader
    $('#dashboard__drop').change(function(){
        $(".dashboard__activity__block .overlay-md").css("display", "flex");
        setTimeout(function(){
            $(".overlay-md").css("display", "none");
        }, 2000);
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
    if(event.target.className.search('addresses__add')===-1&&
        event.target.className.search('addresses__account--edit')){
        if(!$(event.target).parents('.dropdown-btn__list').length){
            $(".dropdown-btn__list").hide();
        }
    }
    if(event.target.className.search('header__userMail')===-1){
        if(!$(event.target).parents('.header__userMail__list').length){
            $(".header__userMail__list").hide();
        }
    }
    const block = $('.help__accordion');
    const block1 = $('.header__list');
    if(block.length){
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
    }
});





























