(function($, window){
    "use strict";


    function ScrollTo($elem, settings) {

        var _public = {};
        var $pane = $('html, body');

        _public.settings = settings;

        var defaults = {
            fixedNav : false,
            fixedNavElem : 'data-fixed-nav',
            animateSpeed: 300,
            hash: false
        };

        _public.settings = $.extend({}, defaults, settings);

        var $fixedNav = $('['+ _public.settings.fixedNavElem +']');

        var fixedNavHeight = 0;

        if ($fixedNav !== undefined && _public.settings.fixedNav === true) {
            fixedNavHeight = $fixedNav.height();
        }

        var init = function() {
            bindEvents();
        };

        var bindEvents = function() {

            $elem.on('click', function(e) {
                var hash;

                if (_public.settings.scrollTo) {
                    hash = _public.settings.scrollTo;
                } else if (e.target !== undefined) {
                    hash = e.target.hash;
                } else {
                    console.warn('No target specified');
                    return;
                }

                var $anchor = $(hash);

                if ($anchor.length > 0) {
                    $pane.animate({ scrollTop: ($anchor.offset().top - fixedNavHeight) }, _public.settings.animateSpeed);
                }

                if (_public.settings.hash && _public.settings.scrollTo) {
                    window.location.hash = _public.settings.scrollTo;
                } else if (_public.settings.hash === false){
                    e.preventDefault();
                }
                
            });
        };

        init();
        
    }

    $.fn.scrollTo = function(settings) {
        ScrollTo(this, settings);
    };

    var findScrollToInDom = function(elem) {

        var $anchors = $('body').find(elem);

        for (var i = 0; i < $anchors.length; i++) {
            var $item = $($anchors[i]);
            var settings = $item.data('scroll-to');
            $item.scrollTo(settings);
        }
        
    };

    findScrollToInDom('[data-scroll-to]');

})(jQuery, window);
