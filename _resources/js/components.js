/* this file contains content compiled through gulp
 *  from the /.includes/components subdirectories.
 *  Run "gulp" from the .includes folder to compile. */
$(document).ready(function() {

    /*
    $('.accordion h3').on('keypress click',function(e){
    	$(this).toggleClass('active');
    	var selector = $(this).next();
    	$(this).next().toggleClass('open');
    });
    */

    // added by Brad, 1/8/2019
    $('.accordion h3').on('keypress click', function(e) {
        $(this).toggleClass('active');
        $(this).siblings('h3').removeClass('active');
        $(this).next().slideToggle('slow');
        $(this).next().siblings('div').slideUp();
    });

    /* p_dropdown toggle */
    $('.drop-toggle').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            e.preventDefault();
            $(this).parents('.drop-container').toggleClass('open');
        };
        if (e.type === 'click') {
            $(this).blur();
        };
    });
    mobistatic();
    /* p_subnav toggle on mobile */
    /* subnav toggling on the front-end.
     */
    $('.subnav .sn-toggle').on('keypress click', function(e) {
        if (e.keyCode === 13 || e.type === 'click') {
            e.preventDefault();
            $(this).parent().toggleClass('open');
        };
        if (e.type === 'click') {
            $(this).blur();
        }
    });

    $('.sub-toggle-wrapper').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            $('.col-sidebar').toggleClass('sub-open');
        };
    });
    ta_load();
    $('.tabs-container ul.tabheaders li a').on('click', function(e) {
        e.preventDefault();
        var a = $(this).attr('href');
        var b = a.substring(1, a.length);
        if (isMobile()) {
            $(this).parent().siblings().removeClass('open');
            $(this).parent().addClass('open');
            if ($(this).parents('.tabs-container').hasClass('collapsable')) {
                if (!$(this).parents('.tabheaders').siblings('#' + b).hasClass('open')) {
                    $(this).parents('.tabheaders').siblings('div.contents').each(function(i) {
                        $(this).removeClass('open');
                    });
                    $(this).parents('.tabheaders').siblings('#' + b).addClass('open');
                    $(this).parents('.tabheaders').addClass('collapsed');
                } else {
                    $(this).parents('.tabheaders').siblings('div.contents').each(function(i) {
                        $(this).removeClass('open');
                    });
                    $(this).parents('.tabheaders').siblings('#' + b).removeClass('open');
                    $(this).parents('.tabheaders').removeClass('collapsed');
                    $(this).parent().removeClass('open');
                }
            } else {
                if (!$(this).parents('.tabheaders').siblings('#' + b).hasClass('open')) {
                    $(this).parents('.tabheaders').siblings('div.contents').each(function(i) {
                        $(this).removeClass('open');
                    });
                    $(this).parents('.tabheaders').siblings('#' + b).addClass('open');
                    $(this).parents('.tabheaders').addClass('collapsed');
                }
            }
        } else {
            $(this).parent().siblings().removeClass('open-desk');
            $(this).parent().addClass('open-desk');
            $(this).parents('.tabheaders').siblings('div.contents').each(function(i) {
                $(this).removeClass('open-desk');
            });
            $(this).parents('.tabheaders').siblings('#' + b).addClass('open-desk');
        }
    });
});

$(window).resize(function() {
    mobistatic();
    ta_update();
});

function mobistatic() {
    if (isMobile()) {
        $(".owl-carousel.mobistatic").trigger('destroy.owl.carousel')
    } else {
        $(".owl-carousel.mobistatic").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
            responsive: false
        })
    }
}

function ta_load() {
    $('.tabaccordion ul.ta_tabs > li > a').on('keypress click', function(e) {
        container_to_toggle = $(this).parents('.ta_tabs').siblings('.ta_container');
        if (isMobile()) {
            $(this).parents('.tabaccordion ul').css('height', 'auto');
            container_to_toggle.find('li').css('height', 'initial');
        } else {
            e.preventDefault();
            $(this).parent().siblings().removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            active = $(this).attr('href').substring(1);
            container_to_toggle.children().removeClass('tab-active');
            container_to_toggle.children('#' + active).addClass('tab-active');
            var tot_h = container_to_toggle.find('.tab-active > div').outerHeight();
            container_to_toggle.css('height', 0);
            container_to_toggle.css('height', tot_h);
        }
    });
    $('.tabaccordion.acc ul h3').on('keypress click', function() {
        if (isMobile()) {
            $(this).parent().siblings().removeClass('acc-active');
            $(this).parent().toggleClass('acc-active');
            //$(this).siblings().animate({height: $(this).get(0).scrollHeight}, 1000 );
            $(this).parents('.tabaccordion ul').css('height', 'auto');
        } else {
            $(this).parent().siblings().removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            var tot_h = $(this).parents('li').outerHeight() + $(this).next().outerHeight();
            $(this).parents('.tabaccordion ul').css('height', tot_h);
        }
    });
    ta_update();
}

function ta_update() {
    $('.tabaccordion.acc ul li > div').each(function() {
        $(this).css('top', $(this).parent().height() + 2);
    });
    if (isMobile()) {
        $('.tabaccordion ul').each(function(e) {
            $(this).css('height', 'auto');
            $('li', this).css('height', 'auto');
        });
    } else {
        $('.tabaccordion ul.ta_container').each(function(e) {
            var open_h = $(this).find('.tab-active > div').outerHeight() + $(this).siblings('.ta_tabs').children('li').outerHeight();
            $(this).css('height', open_h);
        });
        $('.tabaccordion.acc ul').each(function(e) {
            var open_h = $(this).find('.tab-active > div').outerHeight() + $(this).children('li').outerHeight();
            $(this).css('height', open_h);
            //equalHeight('li',this);
        });
    }
}