$(document).ready(function() {

    $('.update-video').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('data-videoID');
        $('.eco-intro .section-graphic iframe').attr({
            'src': 'https://www.youtube.com/embed/' + id + '?rel=0&enablejsapi=1',
            'data-videoID': id
        });
    });

    var firstLoad = 1;
    $('.accordion-container').find('.accordion-toggle').click(function(e) {
        if ($(this).hasClass('active') && !e.isTrigger) {
              $(this).removeClass('active');
              $(this).next().slideUp('fast');
        } else {
        if (firstLoad === 1 || !e.isTrigger) {
          if ($('.accordion-toggle.active').length > 0) {
                $('.accordion-toggle.active').not($(this).next()).next().slideUp('fast');
                $('.accordion-toggle.active').not($(this).next()).removeClass('active');
            }
            $(this).addClass('active');
            $(this).next().slideDown('fast');
        }
      };
        firstLoad = 0;
    });

    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.sort = '';
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function() {
            var obj = this;
            obj.dd.on('click', function(event) {
                $(this).toggleClass('active');
                return false;
            });
            obj.opts.on('click', function() {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
                if ("#dd-spbattries" == obj.dd.selector) {
                    $(".special-product").css("display", "none");
                    var href = $(opt.html()).attr("href");
                    $(href).show(), $("#btnsearch").show(), $("body, html").animate({
                        scrollTop: $(href).offset().top
                    }, 100)
                }
                if ("#dd-spnav" == obj.dd.selector) {
                    var href = $(opt.html()).attr("href");
                    $(location).attr("href", href)
                }
                obj.sort = opt.attr('data-sort');
                $('.filtered-products-container').mixItUp('sort', obj.sort);
            });
        },
        getValue: function() {
            return this.val;
        },
        getIndex: function() {
            return this.index;
        }
    }
    $(function() {
        var dd = new DropDown($('#dd-sort'));
        $(document).click(function() {
            $('.wrapper-dropdown-3').removeClass('active');
        });
        var dd = new DropDown($('#dd-type'));
        $(document).click(function() {
            $('.wrapper-dropdown-3').removeClass('active');
        });
        var dd = new DropDown($('#dd-use'));
        $(document).click(function() {
            $('.wrapper-dropdown-3').removeClass('active');
        });
        var dd = new DropDown($('#dd-brand'));
        $(document).click(function() {
            $('.wrapper-dropdown-3').removeClass('active');
        });
        var dd = new DropDown($("#dd-spbattries"));
        $(document).click(function() {
            $(".wrapper-dropdown-3").removeClass("active")
        });
        var dd = new DropDown($("#dd-spnav"));
        $(document).click(function() {
            $(".wrapper-dropdown-3").removeClass("active")
        });
    });
    $('#mobileSearch').click(function() {
        $('#mobileSearchBox').fadeToggle(300);
    });
    $('a.meanmenu-reveal').click(function() {
        $('#mobileSearchBox').hide();
    });
    $('li.active-country').hover(function() {
        $(this).toggleClass('country-clicked');
    });
    jQuery(window).bind('scroll', function() {
        var navHeight = 64;
        if (jQuery(window).scrollTop() > navHeight && jQuery(window).width() > 1024) {
            jQuery('.main-header').addClass('fixed');
            jQuery('body').css('padding-top', '64px');
        } else {
            jQuery('.main-header').removeClass('fixed');
            jQuery('body').css('padding-top', '0px');
        }
    });
    $(window).hashchange(function() {
        if (location.hash == '') {
            var hash = $('.hash').find('a.accordion-toggle').slice(0, 1).attr('href');
        } else {
            var hash = location.hash;
        }
        $('.hash .accordion-toggle').each(function() {
            if ($(this).attr('href') === hash) {
                $(this).trigger('click');
                PriceSpider.rebind();
            }
        });
    })
    $(window).hashchange();
    $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function() {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function() {
            $('.events').append("<li>after event fired.</li>");
        }
    });
    var x = $(location).attr('pathname');
    if ((x.indexOf("/flashlights-lighting") >= 0) || (x.indexOf("/everyday-flashlights") >= 0) || (x.indexOf("/quotidien") >= 0)) {
        $('.filtered-products-container').mixItUp('sort', 'myorder:asc');
    } else if ((x.indexOf("/hands-free-lighting") >= 0) || (x.indexOf("/mains-libres") >= 0)) {
        $('.filtered-products-container').mixItUp('sort', 'handsfreeorder:asc defaultorder:asc');
    } else if ((x.indexOf("/emergency-lighting") >= 0) || (x.indexOf("/soyez-pret") >= 0)) {
        $('.filtered-products-container').mixItUp('sort', 'preorder:asc');
    } else if ((x.indexOf("/outdoor-lighting") >= 0) || (x.indexOf("/exterieur") >= 0)) {
        $('.filtered-products-container').mixItUp('sort', 'outorder:asc');
    } else if ((x.indexOf("/do-it-yourself") >= 0) || (x.indexOf("/bricolage") >= 0)) {
        $('.filtered-products-container').mixItUp('sort', 'diyorder:asc');
    }
    if (x.indexOf("/energizer-ultimate-lithium-batteries") >= 0) {
        $('body').removeClass("background-red");
        $('body').addClass("background-blue");
        $('div[class="hash accordion-container"]').addClass('lithium-accordion');
    }
    if ((x.indexOf("/battery-chargers") >= 0) || (x.indexOf("/energizer-rechargeable-batteries") >= 0)) {
        $('body').removeClass("background-red");
        $('body').addClass("background-green");
    }
    if ((x.indexOf("/eco-advanced-batteries") >= 0) || (x.indexOf("/ecoadvanced") >= 0) || (x.indexOf("/eco-advanced-battery-coupon") >= 0)) {
        $('body').removeClass("background-red");
        $('body').addClass("background-eco");
    }
    if (x.indexOf("/energizer-advanced-lithium-batteries") >= 0) {
        $('body').removeClass("background-red");
        $('body').addClass("background-yellow");
    }
    if (x.indexOf("/buybatteries") >= 0) {
        $(".main-container").addClass("contact-container -buy-now");
    }
    if ((x.indexOf("/fr") >= 0)) {
        $('body').removeClass("background-red");
        $('body').addClass("background-red-fr");
    }
    if ((x.indexOf("/fr/energie/eco-advanced-batteries") >= 0) || (x.indexOf("/fr/ecoadvanced") >= 0) || (x.indexOf("/eco-advanced-battery-coupon") >= 0)) {
        $('body').removeClass("background-red");
        $('body').addClass("background-eco-fr");
    }
    if (x.indexOf("/fr/energie/les-piles-energizer-ultimate-lithium") >= 0) {
        $('body').removeClass("background-red");
        $('body').addClass("background-blue-fr");
        $('div[class="hash accordion-container"]').addClass('lithium-accordion');
    }
    if ((x.indexOf("/battery-chargers") >= 0) || (x.indexOf("/fr/energie/les-piles-rechargeables-energizer-recharge") >= 0)) {
        $('body').removeClass("background-red");
        $('body').addClass("background-green-fr");
    }
    if ((x.indexOf("/hearing-aid-batteries") >= 0) || (x.indexOf("/les-piles-pour-protheses-auditives") >= 0)) {
        $('.page-meta').addClass("hearing-aids-meta");
    }
    $("p:empty").remove();
    $('ul[class="sshContent"]').removeClass('sshContent').addClass('pagehead-social');
    $('li[class="sshListItem"]').removeClass('sshListItem');
    $('a[ title="Share on Facebook" ]').removeClass('sshListItem').addClass('facebook');
    $('span[class="sshIcon sshShareOnFacebook "]').removeClass('sshIcon sshShareOnFacebook ').addClass('fa icon-header fa-facebook');
    $('a[ title="Tweet this" ]').removeClass('sshListItem').addClass('twitter');
    $('span[class="sshIcon sshShareOnTwitter "]').removeClass('sshIcon sshShareOnTwitter ').addClass('fa icon-header fa-twitter');
    $('a[ title="Share on LinkedIn" ]').removeClass('sshListItem').addClass('linkedin');
    $('span[class="sshIcon sshLinkedIn "]').removeClass('sshIcon sshShareOnTwitter ').addClass('fa icon-header fa-linkedin');
    $('a[ title="Share on GoogleBookmarks" ]').removeClass('sshListItem').addClass('google-plus');
    $('span[class="sshIcon sshGoogleBookmarks "]').removeClass('sshIcon sshGoogleBookmarks ').addClass('fa icon-header fa-google-plus');
    $('div[class="RadSocialShare RadSocialShare_Default"]').removeClass('RadSocialShare RadSocialShare_Default');
    $('.sfsearchSubmit').removeClass('sfsearchSubmit').addClass('search-btn');
    $('input[value="Search"]').attr({
        "value": ""
    });
    $('.search .search-btn').on('click', function(e) {
        var searched = $('.search input[type="text"]').val();
        if (searched == '' || searched == 'Search') {
            e.preventDefault();
            $('.search input[type="text"]').addClass('searchError');
        }
    })
    if ((x.indexOf("/hearing-aid-batteries") >= 0) || (x.indexOf("/les-piles-pour-protheses-auditives") >= 0)) {
        $('.product-family-image').before('<p class="font-size"> <span> <a href="#!" id="decreaseFontSize">Smaller</a> </span> <span>Type Size</span> <span> <a href="#!" id="increaseFontSize">Larger</a> </span> </p>');
        $('p:contains("Type Size")').css("margin-top", "0%");
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            $('p:contains("Type Size")').css("margin-bottom", "3%");
        }
    }
});
$(document).ready(function() {
    $('.font-size a').on('click', function() {
        if (!$('.main-container[data-font-size]').length) {
            var size = $('.main-container').css('font-size');
        } else {
            var size = $('.main-container').attr('data-font-size');
        }
        size = parseInt(size);
        if ($(this).attr('id') == 'decreaseFontSize') {
            size = size - 2;
        } else {
            size = size + 2;
        }
        size = size + 'px';
        if ($('#font-change').length) {
            $('#font-change').empty();
            $('#font-change').append(".main-container p, .accordion-container ul, pagehead-social ul:not(:first-child), .accordion-toggle, .family-info .family-meta span{" + "font-size:" + size + ";" + "}");
        } else {
            $('body').append("<style id='font-change'>" + ".main-container p, .accordion-container ul, pagehead-social ul:not(:first-child), .accordion-toggle, .family-info .family-meta span{" + "font-size:" + size + ";" + "}" + "</style>");
        }
        $('.main-container').attr('data-font-size', size);
    });
    $('iframe[src*="youtube.com"]').each(function() {
        $(this).wrap("<div class='videowrapper' />");
    });
    $(".popupimage").each(function() {
        $(this).fancybox({
            href: $(this).attr('data-fancybox-href'),
            autoScale: false
        });
    });
});

setInterval(function() {
    $('.ps-button-label').css('border-radius', '0px');
    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');
}, 100);

setTimeout(function() {
    $('.ps-button-label').css('border-radius', '0px');
    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');
}, 20);


$(document).ready(function() {

    var x = $(location).attr('pathname');
    if (x.indexOf("/batteries/battery-comparison-chart") >= 0) {
        $('.ultimate-learn').on('click', function(e) {
            e.preventDefault();
            $('#ultimate-uthium').addClass('open');
        });

        $('.max-learn').on('click', function(e) {
            e.preventDefault();
            $('#max').addClass('open');
        });

        $('.universal-learn').on('click', function(e) {
            e.preventDefault();
            $('#recharge-universal').addClass('open');
        });

        $('.power-learn').on('click', function(e) {
            e.preventDefault();
            $('#recharge-power').addClass('open');
        });

        $('.close').on('click', function(e) {
            $('.lightbox').removeClass('open');
        });
    } else if (x.indexOf("/fr/energie/piles") >= 0) {
        $('.ultimate-learn').on('click', function(e) {
            e.preventDefault();
            $('#ultimate-uthium').addClass('open');
        });

        $('.max-learn').on('click', function(e) {
            e.preventDefault();
            $('#max').addClass('open');
        });

        $('.universal-learn').on('click', function(e) {
            e.preventDefault();
            $('#recharge-universal').addClass('open');
        });

        $('.power-learn').on('click', function(e) {
            e.preventDefault();
            $('#recharge-power').addClass('open');
        });

        $('.close').on('click', function(e) {
            $('.lightbox').removeClass('open');
        });
    }

    if ((x.indexOf("/batteries/energizer-ultimate-lithium-batteries") >= 0) || (x.indexOf("/fr/energie/les-piles-energizer-ultimate-lithium") >= 0)) {
        $('.video-modal-1').on('click', function(e) {
            e.preventDefault();
            $('#video-modal-1').addClass('open');
        });

        $('.video-modal-2').on('click', function(e) {
            e.preventDefault();
            $('#video-modal-2').addClass('open');
        });

        $('.video-modal-3').on('click', function(e) {
            e.preventDefault();
            $('#video-modal-3').addClass('open');
        });

        $('.video-modal-4').on('click', function(e) {
            e.preventDefault();
            $('#video-modal-4').addClass('open');
        });

        $('.video-modal-5').on('click', function(e) {
            e.preventDefault();
            $('#video-modal-5').addClass('open');
        });

        $('.modal-close').on('click', function(e) {
            var vid = document.getElementById("vid1");
            vid.pause();
            var vid2 = document.getElementById("vid2");
            vid2.pause();
            var vid3 = document.getElementById("vid3");
            vid3.pause();
            var vid4 = document.getElementById("vid4");
            vid4.pause();
            var vid5 = document.getElementById("vid5");
            vid5.pause();
            $('.video-modal').removeClass('open');
        });
    }

    //Pricespyder button overrides

    $('.ps-btn-green .button-over-hero span').load(function() {
        $('.ps-btn-green .button-over-hero span').css('background', '#1d8b4b');
    })

    $('.ps-btn-blue .button-over-hero span').load(function() {
        $('.ps-btn-blue .button-over-hero span').css('background', '#005daa');
    })

    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');

    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');

});

window.onload = function() {

    $('.ps-button-label').css('border-radius', '0px');
    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');

    $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
    $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');

    // * Accordion click handler, colors buttons that hadn't been loaded yet for css override
    $('.accordion-container').on('click', function() {
        setTimeout(function() {
            $(".ps-btn-green span").css('background', '#1d8b4b').css('border-radius', '0px');
            $(".ps-btn-blue span").css('background', '#005daa').css('border-radius', '0px');
        }, 15)
    });

}
