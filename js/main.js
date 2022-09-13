(function ($) {
    "use strict";

    $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(1000).fadeOut("slow");
    });

    $(document).ready(function () {

        //  Back to top button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        // animation for Back to top button
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 250);
        });

        // ease intialize
        $('.mouse').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '0';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 250, 'easeInSine');
            event.preventDefault();
        });
        
    });

})(jQuery);