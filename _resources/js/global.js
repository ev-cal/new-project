$(document).ready(function() {
    var time_updated = $('.sitewide-alert').data('updated');
    if (Cookies.get('alert_updated') == time_updated) {
        $('.sitewide-alert').addClass('closed');
    }
    var b = document.documentElement;
    b.setAttribute('data-useragent', navigator.userAgent);
    b.setAttribute('data-platform', navigator.platform);

    checkboxFilter.init('1');
    $('#degrees').mixItUp({
        callbacks: {
            onMixEnd: function() {
                ta_update();
            }
        },
        layout: {
            display: 'block'
        },
        selectors: {
            filter: '.filters-1'
        }
    });
    $('.nav-tabs > .online').on('keypress click', function() {
        setTimeout(onlineMixitup, 600);
    });
    $('.sitewide-alert .toggle').on('click', function(e) {
        Cookies.set('alert_updated', time_updated);
        $(this).parents('.sitewide-alert').toggleClass('closed');
    });
    /*turn off outline when clicked*/

    /*$(document).on('mousedown',function(e){
    	$(e.target).css('outline',0);
    });*/

    /* show/hide collapsable section */
    $('.collapsable').each(function(e) {
        if ($(this).height() > 500) {
            $(this).append("<a class='view-more' href='#'>View More</a>");
            $(this).toggleClass('short');
        }
    });
    $('.view-more').on('keypress click', function(e) {
        if (e.which === 13 || e.type === 'click') {
            e.preventDefault();
            $(this).parents('.collapsable').toggleClass('short');
            if ($(this).parents('.collapsable').hasClass('short')) {
                $(this).html('View More');
            } else {
                $(this).html('View Less');
            }
        };
    });

    // Videos:

    $(".play-btn").on("click", function() {

        var videoWrap = $(this).parents('.video-wrap'),
            video = $(this).parents('.video-wrap').children('video').get(0);

        videoWrap.children('.overlay').fadeOut();

        video.setAttribute("controls", "controls");

        video.play();

    });

    // Promo Sidebar:

    if ($('.col-promo').find('.big-promo').length) {
        $('.col-promo').addClass('col-promo-offset');
    }

});
$(window).load(function() {
    svgCircles();
});
$(window).resize(function() {
    svgCircles();
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('.back-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('.back-to-top').stop(true, true).fadeOut();
    }
});

function svgCircles() {
    $('.svgcircles').each(function() {
        var h = $(this).parent('.news-image').height();
        var w = $(this).parent('.news-image').width();
        $(this).css('height', h).css('width', w);
    });
}

function isMobile(width) {
    if (width == undefined) {
        width = 719;
    }
    if (window.innerWidth <= width) {
        return true;
    } else {
        return false;
    }
}

function equalHeight(path) {
    $(path).height("auto");
    var max = Math.max.apply(null,
        $(path).map(function() {
            return $(this).height();
        })
    );
    $(path).height(max);
}

function onlineMixitup() {
    checkboxFilter2.init('2')
    $('#online').mixItUp({
        callbacks: {
            onMixEnd: function() {
                ta_update();
            }
        },
        layout: {
            display: 'block'
        },
        selectors: {
            filter: '.filters-2',
            target: '.mix-2'
        }
    });
}

$('#study-area-degrees').on('click', function(e) {

    e.preventDefault();

    $(this).css('display', 'none');

    $('#a-to-z-degrees').css('display', 'block');

    if (!$('#degrees').hasClass('aos-filter')) {

        $('#degrees').addClass('aos-filter');

        $('.bio-health').insertAfter('.study-area.bio-health');
        $('.biz-social').insertAfter('.study-area.biz-social');
        $('.counsel-matric').insertAfter('.study-area.counsel-matric');
        $('.arts-comm').insertAfter('.study-area.arts-comm');
        $('.kines-ath').insertAfter('.study-area.kines-ath');
        $('.lang-arts').insertAfter('.study-area.lang-arts');
        $('.phy-sci').insertAfter('.study-area.phy-sci');
        $('.math-engin').insertAfter('.study-area.math-engin');

    }

});

$('#a-to-z-degrees').on('click', function(e) {
    e.preventDefault();

    $(this).css('display', 'none');

    $('#study-area-degrees').css('display', 'block');

    $('#degrees').removeClass('aos-filter');

    $('.letter-a').insertAfter('.letter-hdr.letter-a');
    $('.letter-b').insertAfter('.letter-hdr.letter-b');
    $('.letter-c').insertAfter('.letter-hdr.letter-c');
    $('.letter-d').insertAfter('.letter-hdr.letter-d');
    $('.letter-e').insertAfter('.letter-hdr.letter-e');
    $('.letter-f').insertAfter('.letter-hdr.letter-f');
    $('.letter-g').insertAfter('.letter-hdr.letter-g');
    $('.letter-h').insertAfter('.letter-hdr.letter-h');
    $('.letter-i').insertAfter('.letter-hdr.letter-i');
    $('.letter-j').insertAfter('.letter-hdr.letter-j');
    $('.letter-k').insertAfter('.letter-hdr.letter-k');
    $('.letter-l').insertAfter('.letter-hdr.letter-l');
    $('.letter-m').insertAfter('.letter-hdr.letter-m');
    $('.letter-n').insertAfter('.letter-hdr.letter-n');
    $('.letter-o').insertAfter('.letter-hdr.letter-o');
    $('.letter-p').insertAfter('.letter-hdr.letter-p');
    $('.letter-q').insertAfter('.letter-hdr.letter-q');
    $('.letter-r').insertAfter('.letter-hdr.letter-r');
    $('.letter-s').insertAfter('.letter-hdr.letter-s');
    $('.letter-t').insertAfter('.letter-hdr.letter-t');
    $('.letter-u').insertAfter('.letter-hdr.letter-u');
    $('.letter-v').insertAfter('.letter-hdr.letter-v');
    $('.letter-w').insertAfter('.letter-hdr.letter-w');
    $('.letter-x').insertAfter('.letter-hdr.letter-x');
    $('.letter-y').insertAfter('.letter-hdr.letter-y');
    $('.letter-z').insertAfter('.letter-hdr.letter-z');

});

$('#study-area-online').on('click', function(e) {

    e.preventDefault();

    $(this).css('display', 'none');

    $('#a-to-z-online').css('display', 'block');

    if (!$('#online').hasClass('aos-filter')) {

        $('#online').addClass('aos-filter');

        $('.bio-health-online').insertAfter('.aos-online.bio-health-online');
        $('.biz-social-online').insertAfter('.aos-online.biz-social-online');
        $('.counsel-matric-online').insertAfter('.aos-online.counsel-matric-online');
        $('.arts-comm-online').insertAfter('.aos-online.arts-comm-online');
        $('.kines-ath-online').insertAfter('.aos-online.kines-ath-online');
        $('.lang-arts-online').insertAfter('.aos-online.lang-arts-online');
        $('.phy-sci-online').insertAfter('.aos-online.phy-sci-online');
        $('.math-engin-online').insertAfter('.aos-online.math-engin-online');

    }

});

$('#a-to-z-online').on('click', function(e) {

    e.preventDefault();

    $(this).css('display', 'none');

    $('#study-area-online').css('display', 'block');

    $('#online').removeClass('aos-filter');

    $('.ltr-a').insertAfter('.ltr-hdr.ltr-a');
    $('.ltr-b').insertAfter('.ltr-hdr.ltr-b');
    $('.ltr-c').insertAfter('.ltr-hdr.ltr-c');
    $('.ltr-d').insertAfter('.ltr-hdr.ltr-d');
    $('.ltr-e').insertAfter('.ltr-hdr.ltr-e');
    $('.ltr-f').insertAfter('.ltr-hdr.ltr-f');
    $('.ltr-g').insertAfter('.ltr-hdr.ltr-g');
    $('.ltr-h').insertAfter('.ltr-hdr.ltr-h');
    $('.ltr-i').insertAfter('.ltr-hdr.ltr-i');
    $('.ltr-j').insertAfter('.ltr-hdr.ltr-j');
    $('.ltr-k').insertAfter('.ltr-hdr.ltr-k');
    $('.ltr-l').insertAfter('.ltr-hdr.ltr-l');
    $('.ltr-m').insertAfter('.ltr-hdr.ltr-m');
    $('.ltr-n').insertAfter('.ltr-hdr.ltr-n');
    $('.ltr-o').insertAfter('.ltr-hdr.ltr-o');
    $('.ltr-p').insertAfter('.ltr-hdr.ltr-p');
    $('.ltr-q').insertAfter('.ltr-hdr.ltr-q');
    $('.ltr-r').insertAfter('.ltr-hdr.ltr-r');
    $('.ltr-s').insertAfter('.ltr-hdr.ltr-s');
    $('.ltr-t').insertAfter('.ltr-hdr.ltr-t');
    $('.ltr-u').insertAfter('.ltr-hdr.ltr-u');
    $('.ltr-v').insertAfter('.ltr-hdr.ltr-v');
    $('.ltr-w').insertAfter('.ltr-hdr.ltr-w');
    $('.ltr-x').insertAfter('.ltr-hdr.ltr-x');
    $('.ltr-y').insertAfter('.ltr-hdr.ltr-y');
    $('.ltr-z').insertAfter('.ltr-hdr.ltr-z');

});


/************************************************************************/
// TabCollapse Source: https://github.com/flatlogic/bootstrap-tabcollapse
/************************************************************************/

! function($) {

    "use strict";

    // TABCOLLAPSE CLASS DEFINITION
    // ======================

    var TabCollapse = function(el, options) {
        this.options = options;
        this.$tabs = $(el);

        this._accordionVisible = false; //content is attached to tabs at first
        this._initAccordion();
        this._checkStateOnResize();


        // checkState() has gone to setTimeout for making it possible to attach listeners to
        // shown-accordion.bs.tabcollapse event on page load.
        // See https://github.com/flatlogic/bootstrap-tabcollapse/issues/23
        var that = this;
        setTimeout(function() {
            that.checkState();
        }, 0);
    };

    TabCollapse.DEFAULTS = {
        accordionClass: 'visible-xs',
        tabsClass: 'hidden-xs',
        accordionTemplate: function(heading, groupId, parentId, active) {
            return '<div class="panel panel-default">' +
                '   <div class="panel-heading">' +
                '      <h4 class="panel-title">' +
                '      </h4>' +
                '   </div>' +
                '   <div id="' + groupId + '" class="panel-collapse collapse ' + (active ? 'in' : '') + '">' +
                '       <div class="panel-body js-tabcollapse-panel-body">' +
                '       </div>' +
                '   </div>' +
                '</div>'

        }
    };

    TabCollapse.prototype.checkState = function() {
        if (this.$tabs.is(':visible') && this._accordionVisible) {
            this.showTabs();
            this._accordionVisible = false;
        } else if (this.$accordion.is(':visible') && !this._accordionVisible) {
            this.showAccordion();
            this._accordionVisible = true;
        }
    };

    TabCollapse.prototype.showTabs = function() {
        var view = this;
        this.$tabs.trigger($.Event('show-tabs.bs.tabcollapse'));

        var $panelHeadings = this.$accordion.find('.js-tabcollapse-panel-heading').detach();

        $panelHeadings.each(function() {
            var $panelHeading = $(this),
                $parentLi = $panelHeading.data('bs.tabcollapse.parentLi');

            var $oldHeading = view._panelHeadingToTabHeading($panelHeading);

            $parentLi.removeClass('active');
            if ($parentLi.parent().hasClass('dropdown-menu') && !$parentLi.siblings('li').hasClass('active')) {
                $parentLi.parent().parent().removeClass('active');
            }

            if (!$oldHeading.hasClass('collapsed')) {
                $parentLi.addClass('active');
                if ($parentLi.parent().hasClass('dropdown-menu')) {
                    $parentLi.parent().parent().addClass('active');
                }
            } else {
                $oldHeading.removeClass('collapsed');
            }

            $parentLi.append($panelHeading);
        });

        if (!$('li').hasClass('active')) {
            $('li').first().addClass('active')
        }

        var $panelBodies = this.$accordion.find('.js-tabcollapse-panel-body');
        $panelBodies.each(function() {
            var $panelBody = $(this),
                $tabPane = $panelBody.data('bs.tabcollapse.tabpane');
            $tabPane.append($panelBody.contents().detach());
        });
        this.$accordion.html('');

        if (this.options.updateLinks) {
            var $tabContents = this.getTabContentElement();
            $tabContents.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function() {
                var $el = $(this);
                var href = $el.attr('href').replace(/-collapse$/g, '');
                $el.attr({
                    'data-toggle': $el.attr('data-toggle-was'),
                    'data-toggle-was': '',
                    'data-parent': '',
                    href: href
                });
            });
        }

        this.$tabs.trigger($.Event('shown-tabs.bs.tabcollapse'));
    };

    TabCollapse.prototype.getTabContentElement = function() {
        var $tabContents = $(this.options.tabContentSelector);
        if ($tabContents.length === 0) {
            $tabContents = this.$tabs.siblings('.tab-content');
        }
        return $tabContents;
    };

    TabCollapse.prototype.showAccordion = function() {
        this.$tabs.trigger($.Event('show-accordion.bs.tabcollapse'));

        var $headings = this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'),
            view = this;
        $headings.each(function() {
            var $heading = $(this),
                $parentLi = $heading.parent();
            $heading.data('bs.tabcollapse.parentLi', $parentLi);
            view.$accordion.append(view._createAccordionGroup(view.$accordion.attr('id'), $heading.detach()));
        });

        if (this.options.updateLinks) {
            var parentId = this.$accordion.attr('id');
            var $selector = this.$accordion.find('.js-tabcollapse-panel-body');
            $selector.find('[data-toggle="tab"], [data-toggle="pill"]').each(function() {
                var $el = $(this);
                var href = $el.attr('href') + '-collapse';
                $el.attr({
                    'data-toggle-was': $el.attr('data-toggle'),
                    'data-toggle': 'collapse',
                    'data-parent': '#' + parentId,
                    href: href
                });
            });
        }

        this.$tabs.trigger($.Event('shown-accordion.bs.tabcollapse'));
    };

    TabCollapse.prototype._panelHeadingToTabHeading = function($heading) {
        var href = $heading.attr('href').replace(/-collapse$/g, '');
        $heading.attr({
            'data-toggle': 'tab',
            'href': href,
            'data-parent': ''
        });
        return $heading;
    };

    TabCollapse.prototype._tabHeadingToPanelHeading = function($heading, groupId, parentId, active) {
        $heading.addClass('js-tabcollapse-panel-heading ' + (active ? '' : 'collapsed'));
        $heading.attr({
            'data-toggle': 'collapse',
            'data-parent': '#' + parentId,
            'href': '#' + groupId
        });
        return $heading;
    };

    TabCollapse.prototype._checkStateOnResize = function() {
        var view = this;
        $(window).resize(function() {
            clearTimeout(view._resizeTimeout);
            view._resizeTimeout = setTimeout(function() {
                view.checkState();
            }, 100);
        });
    };


    TabCollapse.prototype._initAccordion = function() {
        var randomString = function() {
            var result = "",
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 5; i++) {
                result += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return result;
        };

        var srcId = this.$tabs.attr('id'),
            accordionId = (srcId ? srcId : randomString()) + '-accordion';

        this.$accordion = $('<div class="panel-group ' + this.options.accordionClass + '" id="' + accordionId + '"></div>');
        this.$tabs.after(this.$accordion);
        this.$tabs.addClass(this.options.tabsClass);
        this.getTabContentElement().addClass(this.options.tabsClass);
    };

    TabCollapse.prototype._createAccordionGroup = function(parentId, $heading) {
        var tabSelector = $heading.attr('data-target'),
            active = $heading.data('bs.tabcollapse.parentLi').is('.active');

        if (!tabSelector) {
            tabSelector = $heading.attr('href');
            tabSelector = tabSelector && tabSelector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        var $tabPane = $(tabSelector),
            groupId = $tabPane.attr('id') + '-collapse',
            $panel = $(this.options.accordionTemplate($heading, groupId, parentId, active));
        $panel.find('.panel-heading > .panel-title').append(this._tabHeadingToPanelHeading($heading, groupId, parentId, active));
        $panel.find('.panel-body').append($tabPane.contents().detach())
            .data('bs.tabcollapse.tabpane', $tabPane);

        return $panel;
    };



    // TABCOLLAPSE PLUGIN DEFINITION
    // =======================

    $.fn.tabCollapse = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('bs.tabcollapse');
            var options = $.extend({}, TabCollapse.DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) $this.data('bs.tabcollapse', new TabCollapse(this, options));
        });
    };

    $.fn.tabCollapse.Constructor = TabCollapse;


}(window.jQuery);

$('.nav-tabs').tabCollapse();

var checkboxFilter = checkboxFilter2 = studyAreas1 = studyAreas2 = {
    $filters: null,
    $reset: null,
    groups: [],
    outputArray: [],
    outputString: '',
    init: function(id) {
        var self = this;
        var fil = '.filters-' + id;
        self.$filters = $(fil);
        self.$reset = $('.reset');

        self.$filters.find('fieldset').each(function() {
            self.groups.push({
                $inputs: $(this).find('input'),
                active: [],
                tracker: false
            });
        });
        self.bindHandlers(id);
    },
    bindHandlers: function(id) {
        var self = this;
        self.$filters.on('change', function() {
            self.parseFilters(id);
        });
        self.$reset.on('click', function(e) {
            e.preventDefault();
            self.$filters[0].reset();
            self.parseFilters(id);
        });
    },
    parseFilters: function(id) {
        var self = this;
        for (var i = 0, group; group = self.groups[i]; i++) {
            group.active = []; // reset arrays
            group.$inputs.each(function() {
                $(this).is(':checked') && group.active.push(this.value);
            });
            group.active.length && (group.tracker = 0);
        }
        self.concatenate(id);
    },
    concatenate: function(id) {
        var self = this,
            cache = '',
            crawled = false,
            checkTrackers = function() {
                var done = 0;
                for (var i = 0, group; group = self.groups[i]; i++) {
                    (group.tracker === false) && done++;
                }
                return (done < self.groups.length);
            },
            crawl = function() {
                for (var i = 0, group; group = self.groups[i]; i++) {
                    group.active[group.tracker] && (cache += group.active[group.tracker]);
                    if (i === self.groups.length - 1) {
                        self.outputArray.push(cache);
                        cache = '';
                        updateTrackers();
                    }
                }
            },
            updateTrackers = function() {
                for (var i = self.groups.length - 1; i > -1; i--) {
                    var group = self.groups[i];
                    if (group.active[group.tracker + 1]) {
                        group.tracker++;
                        break;
                    } else if (i > 0) {
                        group.tracker && (group.tracker = 0);
                    } else {
                        crawled = true;
                    }
                }
            };
        self.outputArray = [];
        do {
            crawl();
        }
        while (!crawled && checkTrackers());
        self.outputString = self.outputArray.join();
        !self.outputString.length && (self.outputString = 'all');
        //console.log(self.outputString); 
        var results = '.row-results-' + id;
        $(results).each(function() {
            $(this).mixItUp('filter', self.outputString);
        })
    }
};