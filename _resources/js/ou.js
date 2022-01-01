$(window).load(function() {
    $(".success-stories").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    })
});

$(function() {
    $("#faq").accordion({
        heightStyle: "content"
    });
});

$(window).load(function() {
    $(".photo-gallery").owlCarousel({
        resopnsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 2
            },
            768: {
                items: 3
            },
            1199: {
                items: 3
            }
        },
        nav: true,
        pagination: true,
        loop: true,
        navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"]
    });
});

$(window).load(function() {
    $(".events-callout").owlCarousel({
        resopnsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 2
            },
            768: {
                items: 3
            },
            1199: {
                items: 3
            }
        },
        nav: true,
        pagination: true,
        loop: true,
        navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"]
    });
});

$(window).load(function() {

    $(".featured-programs").owlCarousel({

        items: 1,

        loop: true,

        dots: true,

        nav: true,

        navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],

    })

});

$(window).load(function() {

    $('#subnav > ul li a').each(function(index, anchorTag) {
        var $domain = OUC.globalProps['domain']
        var $currentPage = $domain + OUC.globalProps['path'] /* window.location */
        var $extension = OUC.globalProps['extension'] /* .html, .aspx, .php, etc */
        var $indexFile = OUC.globalProps['index-file'] /* default, index etc */

        // if the http root is not the same as domain
        var $trueHTTP = $domain

        $link = $(this).attr('href')

        if ($currentPage.indexOf($extension) == -1) {
            $currentPage = $currentPage + $indexFile + index
        }
        // check if link matches current page
        if ($currentPage == $link || $trueHTTP + $link == $currentPage) {

            $(this).parent().addClass('active active-trail open')
            // break out of the loop
            return false
        }

    });

});