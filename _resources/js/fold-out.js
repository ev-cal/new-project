$(document).ready(function() {
    $('html').on('keypress click', function(e) {
        if (e.keyCode === 13 || e.type === 'click') {
            if (!$(e.target).hasClass('search') &&
                !$(e.target).hasClass('search-toggle') &&
                !$(e.target).parents().hasClass('search-toggle') &&
                !$(e.target).parents().hasClass('search')) {
                $('.l-head').removeClass('search-open');
            }
        };
    });
    $('.search-toggle').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            $(this).blur();
            e.preventDefault();
            $(this).parents('.l-head').toggleClass('search-open');
            document.getElementById('as_q').focus();
        };
    });
    $('.mobi-toggle-wrapper').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            $('.nav-wrapper').slideToggle(200);
        };
    });
    mobileUIFunc();
});

$(window).on('resize', function() {
    mobileUIFunc();
});

$(window).scroll(function() {
    var topPos = $(document).scrollTop();
    if (45 < topPos) {
        $('body').addClass('sticky');
    } else {
        $('body').removeClass('sticky');
    }
});

function mobileUIFunc() {

    // TODO--THIS KIND OF LOGIC GOES HERE:

    var utilityMenu = $('#utility-appender'),
        gatewayMenu = $('#gateway-appender'),
        searchMenu = $('#search-appender'),
        mobileUIWrap = $('.nav-wrapper .b-column');

    if (window.innerWidth > 1121) {
        $('.nav-wrapper').css('display', 'block');
        $('body').removeClass("mobi-open");
    } else if (window.innerWidth < 881) {
        $('body').addClass("mobi-open");
        $('.nav-wrapper').css('display', 'none');
    } else {
        $('.nav-wrapper').css('display', 'none');
        $('body').removeClass("mobi-open");
    }

    if (window.innerWidth < 881) {
        mobileUIWrap.prepend(searchMenu);
    } else {
        $('.utility .container').append(searchMenu);
    }

    if (window.innerWidth < 1121) {
        mobileUIWrap.prepend(gatewayMenu);
    } else {
        $('.utility .container').append(gatewayMenu);
    }

    if (window.innerWidth < 881) {
        mobileUIWrap.append(utilityMenu);
    } else {
        $('.utility-menu').append(utilityMenu);
    }

}