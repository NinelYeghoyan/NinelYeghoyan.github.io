$=jQuery.noConflict();
$(document).ready(function() {
    // Owl carousel 1
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
    // Owl carousel 2
    $('.carousel2').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            410:{
                items:2
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
            1000:{
                items:5
            },
            1300:{
                items:8
            }
        }
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
    // header background color change
    $(function () {
        var header = $('.header');
        if(header.length!==0){
            $(window).scroll(function (event) {
                var y = $(this).scrollTop();
                if (y > 0) {
                    header.addClass('header__backgroundColor');
                }
                else {
                    header.removeClass('header__backgroundColor');
                }
            });
        }
    });
    // header background color change refresh time
    $(function () {
        var header = $('.header');
        if(header.length!==0){
            var y = $(this).scrollTop();
            if (y > 0) {
                header.addClass('header__backgroundColor');
            }
            else {
                header.removeClass('header__backgroundColor');
            }
            onScroll();
        }
    });
    // achievements number counter on scroll time
    var a = 0;
    $(window).scroll(function() {
        var element = $('.scroll-count');
        if(element.length > 0 ){
            var oTop = $('.scroll-count').offset().top - window.innerHeight;
            if (a === 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        }
    });
    // Tours Filter open and close
    $('.tours-filter--show').click(function(){
        var link = $(this);
        $('.tours-filter-inside').slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                link.html('');
                link.append('<p class="tours-filter--show__title">Close Filters</p>');
                link.append('<img src="../img/tour/tours-arrowTop.png" alt="arrow">');

            } else {
                link.html('<p class="tours-filter--show__title">Show All Filters</p>');
                link.append('<img src="../img/tour/tours-arrowDown.png" alt="arrow">');
            }
        });
    });
    // Tours Filter outer checkbox
    var checkboxParent = $('#parent');
    var checkboxChild = $('.child');
    checkboxParent.click(function() {
        $(this).addClass('tours-filter__active');
        checkboxChild.addClass('tours-filter__active');
    });
    checkboxChild.click(function() {
        if(checkboxParent.hasClass("tours-filter__active")){
            checkboxParent.removeClass('tours-filter__active');
            $(this).removeClass('tours-filter__active');
        }
        else{
            if($(this).hasClass('tours-filter__active')){
                $(this).removeClass('tours-filter__active');
            }
            else{
                $(this).addClass('tours-filter__active');
                var sum = 0;
                for(var i = 0; i<checkboxChild.length; i++){
                    if(!checkboxChild.eq(i).hasClass('tours-filter__active')){
                        sum++;
                    }
                }
                if(sum === 0){
                    checkboxParent.addClass('tours-filter__active');
                }
            }
        }
    });
    // Tours Filter inner PeriodRadiobutton
    var innerRadioPeriod = $('.tours-filter-inside__formPeriod__input');
    innerRadioPeriod.click(function(){
        if($(this).hasClass("tours-filter__active")){
            $(this).removeClass('tours-filter__active');
        }
        else{
            innerRadioPeriod.removeClass("tours-filter__active");
            $(this).addClass("tours-filter__active");
        }
    });
    // Tours Filter inner SeasonRadiobutton
    var innerRadioSeason = $('.tours-filter-inside__formSeason__input');
    innerRadioSeason.click(function(){
        if($(this).hasClass("tours-filter__active")){
            $(this).removeClass('tours-filter__active');
        }
        else{
            innerRadioSeason.removeClass("tours-filter__active");
            $(this).addClass("tours-filter__active");
        }
    });
    // Tours Filter inner GroupRadiobutton
    var innerRadioGroup = $('.tours-filter-inside__formGroup__input');
    innerRadioGroup.click(function(){
        if($(this).hasClass("tours-filter__active")){
            $(this).removeClass('tours-filter__active');
        }
        else{
            innerRadioGroup.removeClass("tours-filter__active");
            $(this).addClass("tours-filter__active");
        }
    });
    // Tours Filter inner CategoryRadiobutton
    var innerRadioCategory = $('.tours-filter-inside__formCategory__input');
    innerRadioCategory.click(function(){
        if($(this).hasClass("tours-filter__active")){
            $(this).removeClass('tours-filter__active');
        }
        else{
            innerRadioCategory.removeClass("tours-filter__active");
            $(this).addClass("tours-filter__active");
        }
    });

    // ==============  about page ==============
    // about page menu fixed
    $(function () {
        var sidebar = $('#about-menuScroll');
        if(sidebar.length!==0){
            var top = sidebar.offset().top - sidebar[0].getBoundingClientRect().height;
            $(window).scroll(function (event) {
                onScroll();
                var y = $(this).scrollTop();
                if (y >= top) {
                    sidebar.addClass('about-menu__fixed');
                    $('#about-company').css({"margin-top":sidebar[0].getBoundingClientRect().height})
                } else {
                    sidebar.removeClass('about-menu__fixed');
                    $('#about-company').css({"margin-top":0})
                }
            });
        }
    });

    $(function () {
        var sidebar = $('#about-menuScroll');
        if(sidebar.length!==0){
            var top = sidebar.offset().top - sidebar[0].getBoundingClientRect().height;
            var y = $(this).scrollTop();
            if (y >= top) {
                $('#about-company').css({"margin-top":sidebar[0].getBoundingClientRect().height});
                sidebar.addClass('about-menu__fixed');
            } else {
                sidebar.removeClass('about-menu__fixed');
                $('#about-company').css({"margin-top":0})
            }
            onScroll();
        }
    });
    // smooth scroll
    var sidebar = $('#about-menuScroll');
    $('a[href^="#"]').on('click', function (e) {
        if(sidebar.length){
            var target = this.hash;
            var $target = $(target);
            var deviationTop = document.getElementById("about-menuScroll").getBoundingClientRect().bottom;

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - deviationTop
            }, 1000, 'swing');

            return  false;
        }
    });
    function onScroll(){
        if(sidebar.length) {
            var scrollPos = $(document).scrollTop();
            var deviationTop = document.getElementById("about-menuScroll").getBoundingClientRect().bottom;
            var active = [];
            var defalutElement;
            $('.about-menu__list a').each(function () {
                var currLink = $(this);
                var selection = $(this.hash);
                if(!defalutElement){
                    defalutElement = currLink;
                }
                currLink.removeClass("about-menu__active");
                if(selection[0].getBoundingClientRect().top <= deviationTop ){
                    active.push(currLink);
                }
            });
            if(active.length === 0){
                defalutElement.addClass('about-menu__active');
            }else{
                active[active.length-1].addClass('about-menu__active');
            }
        }
    }
    // ------ about page mobile menu part -------
    var aboutMenuMobile = $('.about-menu__mobile');
    var aboutMenuList = $('.about-menu__list');
    var armeniaTabList = $('.armenia-tabs__list');
    aboutMenuMobile.click(function(event) {
        event.preventDefault();
        aboutMenuList.slideToggle('fast');
        armeniaTabList.slideToggle('fast');
        $('.about-menu__mobile__icon').toggleClass('about-menu__mobile__rotateIcon');
        /*if ($(window).width() <= 1024) {
            $('.armenia-tabs__link').click(function() {
                armeniaTabList.fadeOut('fast');
            });
        }*/
    });
    // ============== armenia page ==============
    // ------------ armenia page tabs -----------
    $('.armenia-tabs__list li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.armenia-tabs__list li').removeClass('current');
        $('.armenia-tabs__content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    // armenia page tabs menu fixed
    $(function () {
        var sidebar1 = $('#armenia-menuScroll');
        if(sidebar1.length!==0){
            var top = sidebar1.offset().top - sidebar1[0].getBoundingClientRect().height;
            $(window).scroll(function (event) {
                onScroll();
                var y = $(this).scrollTop();
                if (y >= top) {
                    sidebar1.addClass('armenia-tabs__fixed');
                } else {
                    sidebar1.removeClass('armenia-tabs__fixed');
                }
            });
        }
    });
    $(function () {
        var sidebar1 = $('#armenia-menuScroll');
        if(sidebar1.length!==0){
            var top = sidebar1.offset().top - sidebar1[0].getBoundingClientRect().height;
            var y = $(this).scrollTop();
            if (y >= top) {
                sidebar1.addClass('armenia-tabs__fixed');
            } else {
                sidebar1.removeClass('armenia-tabs__fixed');
            }
            onScroll();
        }
    });
    // armenia page tabs menu scroll to top
    $(function () {
        $('.armenia-tabs__list li').mouseup(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
    // armenia page sightseeing filter
    $(function () {
        var selectedCategory = "";
        $('.armenia-sightseeing__filter').on('click', function(){
            selectedCategory = $(this).attr('data-filter');
            $('.armenia-sightseeing__list__input').removeClass('armenia-sightseeing__filterActive');
            $(this).find('.armenia-sightseeing__list__input').addClass('armenia-sightseeing__filterActive');
            $('#armenia-sightseeing__inner').find('li').show();
            if(selectedCategory !== 'all'){
                showFilter(selectedCategory);
            }
        });
        function showFilter(x){
            $('#armenia-sightseeing__inner').find('li').each(function(){
                if(!$(this).hasClass(x)){
                    $(this).hide();
                }
            });
        }
    });

    // ==============  services page ==============
    // about page menu fixed
    $(function () {
        var sidebar = $('#service-menuScroll');
        if(sidebar.length!==0){
            var top = sidebar.offset().top - sidebar[0].getBoundingClientRect().height;
            $(window).scroll(function (event) {
                onScrollService();
                var y = $(this).scrollTop();
                if (y >= top) {
                    sidebar.addClass('service-menu__fixed');
                    $('#service-packages').css({"margin-top":sidebar[0].getBoundingClientRect().height})
                } else {
                    sidebar.removeClass('service-menu__fixed');
                    $('#service-packages').css({"margin-top":0})
                }
            });
        }
    });

    $(function () {
        var sidebar = $('#service-menuScroll');
        if(sidebar.length!==0){
            var top = sidebar.offset().top - sidebar[0].getBoundingClientRect().height;
            var y = $(this).scrollTop();
            if (y >= top) {
                $('#service-packages').css({"margin-top":sidebar[0].getBoundingClientRect().height});
                sidebar.addClass('service-menu__fixed');
            } else {
                sidebar.removeClass('service-menu__fixed');
                $('#service-packages').css({"margin-top":0})
            }
            onScroll();
        }
    });
    // smooth scroll
    var sidebar_1 = $('#service-menuScroll');
    $('a[href^="#"]').on('click', function (e) {
        if(sidebar_1.length){
            var target = this.hash;
            var $target = $(target);
            var deviationTop = document.getElementById("service-menuScroll").getBoundingClientRect().bottom;

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - deviationTop
            }, 1000, 'swing');

            return  false;
        }
    });
    function onScrollService(){
        if(sidebar_1.length) {
            var scrollPos = $(document).scrollTop();
            var deviationTop = document.getElementById("service-menuScroll").getBoundingClientRect().bottom;
            var active = [];
            var defalutElement;
            $('.service-menu__list a').each(function () {
                var currLink = $(this);
                var selection = $(this.hash);
                if(!defalutElement){
                    defalutElement = currLink;
                }
                currLink.removeClass("service-menu__active");
                if(selection[0].getBoundingClientRect().top <= deviationTop ){
                    active.push(currLink);
                }
            });
            if(active.length === 0){
                defalutElement.addClass('service-menu__active');
            }else{
                active[active.length-1].addClass('service-menu__active');
            }
        }
    }
    // ------ service page mobile menu part -------
    var serviceMenuMobile = $('.service-menu__mobile');
    var serviceMenuList = $('.service-menu__list');
    var serviceTabList = $('.service-tabs__list');
    serviceMenuMobile.click(function(event) {
        event.preventDefault();
        serviceMenuList.slideToggle('fast');
        serviceTabList.slideToggle('fast');
        $('.service-menu__mobile__icon').toggleClass('service-menu__mobile__rotateIcon');
        /*if ($(window).width() <= 1024) {
            $('.armenia-tabs__link').click(function() {
                armeniaTabList.fadeOut('fast');
            });
        }*/
    });
});
// language dropdown open and close
function dropdown_function() {
    document.getElementById("header__languagePicker-dropDown").classList.toggle("header__languagePicker__show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!(event.target.matches('.header__languagePicker')||event.target.matches('.header__languagePicker__button'))) {

        var dropdowns = document.getElementsByClassName("header__languagePicker__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('header__languagePicker__show')) {
                openDropdown.classList.remove('header__languagePicker__show');
            }
        }
    }
};
