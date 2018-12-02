$(document).ready(function () {
    // auth banner window height
    var winHeight = $(window).height();
    $('.auth-banner').css('height', winHeight);
    $(window).resize(function () {
        var winHeight = window.innerHeight;
        $(".auth-banner").height(winHeight);
    });
});

