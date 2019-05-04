/*
 * TABLE OF CONTENTS
 *
 * Box Image slider
 */

// > header button
$('.header .btn-bars').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass("active");
        $('.mobile-menu').removeClass("display");
    } else {
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
        $('.mobile-menu').siblings().removeClass("display");
        $('.mobile-menu').addClass("display");
    }
})
$('.header .btn-search').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass("active");
        $('.search-content').removeClass("display");
    } else {
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
        $('.search-content').siblings().removeClass("display");
        $('.search-content').addClass("display");
    }
})


// > title toggle
$('.block__header button').click(function() {
    $(this).parent().parent().find('.sub-title').toggleClass('display');
})
$('.breadcrumbs button').click(function() {
    $(this).parent().parent().find('.breadcrumbs__more').toggleClass('display');
})
