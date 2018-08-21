$(function() {
    $("#sp_menu").click(function() {
        $("#nav").slideToggle(200);
    });
    $('#nav_toggle').click(function() {
        $('header').toggleClass('open_nav');
    });
    $('a[href^=#]').click(function() {
        var speed = 400; // ミリ秒
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    // スライドショー
    $('.single-item').slick({
	    autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: false,
        centerMode: true,
        variableWidth: true,
    });
});
