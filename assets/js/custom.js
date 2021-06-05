(function() {
    /* prelaoder */
    $(window).on('load', function() {
        $('.preloader-wrapper').delay(1000).fadeOut('slow');
    });

    /* search */
    $('#btnSearchClose').on('click', function() {
        $('.search-wrapper').fadeOut('slow');
    });
    $('#btnSearchOpen').on('click', function() {
        $('.search-wrapper').fadeIn('slow');
    });

    /* sidebar */
    $('#btnSidebarClose').on('click', function() {
        $('.menu-sidebar').removeClass('box-shadow-menu');
        $('.menu-sidebar').animate({
            right: '-280px'
        }, 2000);
    });
    $('#btnSidebarOpen').on('click', function() {
        $('.menu-sidebar').addClass('box-shadow-menu');
        $('.menu-sidebar').animate({
            right: '0'
        }, 2000);
    });

    /* dropdown */
    $('.nav-link.dropdown-toggle').on('click', function() {
        $('.navbar-nav').find('.nav-item.dropdown.show .dropdown-menu').slideUp();
        if(!$(this).parent().hasClass('show')) {
            $(this).parent().find('.dropdown-menu').slideDown();
        } else {
            $(this).parent().find('.dropdown-menu').slideUp();
        }
    });
    $('html').on('click', function() {
        $('.navbar-nav').find('.nav-item.dropdown.show .dropdown-menu').slideUp();
    });

    /* header slider 1 */
    $('#headerSlider1').owlCarousel({
        items: 1,
        margin: 0,
        stagePadding: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1500,
        dots: false,
        nav: false
    });
    $('.button-slider.left').on('click', function() {
        $('#headerSlider1').trigger('prev.owl.carousel', [1500]);
    });
    $('.button-slider.right').on('click', function() {
        $('#headerSlider1').trigger('next.owl.carousel', [1500]);
    });
})(window.jQuery);