$(document).ready(function () {
    $(".loader").fadeOut(1000, function () {
        $(this).parent().hide();
        $('html, body').css("overflow", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('.page-body').css("overflow-y", "hidden");
        $('html').css("overflow-y", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow-y", "auto");
        $('html').css("overflow-y", "auto");
    });
    $(".main-xs-nav").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.open-search').click(function () {
        $(this).css("display", "none");
        $('.close-search').css("display", "flex");
        if ($(window).width() > 991) {
            $('.search-overlay').show();
            $('.nav-links').fadeOut(500);
            $('.search').addClass("searchin");
            $('.search').removeClass("searchout");
        } else {
            $('.search-pop').fadeIn(500);
        }
    });
    $('.close-search').click(function () {
        $(this).css("display", "none");
        $('.open-search').css("display", "flex");
        if ($(window).width() > 991) {
            $('.search-overlay').hide();
            $('.nav-links').fadeIn(500);
            $('.search').removeClass("searchin");
            $('.search').addClass("searchout");
        } else {
            $('.search-pop').fadeOut(500);
        }
    });
    $('.search-overlay').click(function () {
        $('.close-search').css("display", "none");
        $('.open-search').css("display", "flex");
        if ($(window).width() > 991) {
            $('.search-overlay').hide();
            $('.nav-links').fadeIn(500);
            $('.search').removeClass("searchin");
            $('.search').addClass("searchout");
        } else {
            $('.search-pop').fadeOut(500);
        }
    });



    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: true
            },
        }
    });

    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        autoplayTimeout: 5000,
        margin: 15,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px"><path fill-rule="evenodd"  fill="rgb(205, 205, 205)" d="M10.430,9.726 L1.373,0.671 C1.160,0.458 0.818,0.458 0.604,0.671 C0.391,0.885 0.391,1.227 0.604,1.440 L9.275,10.108 L0.604,18.777 C0.391,18.990 0.391,19.332 0.604,19.545 C0.709,19.650 0.850,19.706 0.987,19.706 C1.124,19.706 1.264,19.654 1.369,19.545 L10.426,10.490 C10.639,10.281 10.639,9.935 10.430,9.726 Z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="11px" height="20px"><path fill-rule="evenodd"  fill="rgb(205, 205, 205)"d="M0.455,9.617 L9.758,0.550 C9.977,0.336 10.329,0.336 10.548,0.550 C10.767,0.763 10.767,1.105 10.548,1.319 L1.641,9.999 L10.548,18.679 C10.767,18.893 10.767,19.235 10.548,19.448 C10.440,19.553 10.295,19.609 10.155,19.609 C10.014,19.609 9.870,19.557 9.762,19.448 L0.459,10.382 C0.240,10.172 0.240,9.826 0.455,9.617 Z"/></svg>'
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });

    $('.cats-slider').owlCarousel({
        items: 4,
        margin: 27,
        autoplay: false,
        autoplayTimeout: 2500,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11px" height="20px"><path fill-rule="evenodd"  fill="rgb(205, 205, 205)" d="M10.430,9.726 L1.373,0.671 C1.160,0.458 0.818,0.458 0.604,0.671 C0.391,0.885 0.391,1.227 0.604,1.440 L9.275,10.108 L0.604,18.777 C0.391,18.990 0.391,19.332 0.604,19.545 C0.709,19.650 0.850,19.706 0.987,19.706 C1.124,19.706 1.264,19.654 1.369,19.545 L10.426,10.490 C10.639,10.281 10.639,9.935 10.430,9.726 Z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="11px" height="20px"><path fill-rule="evenodd"  fill="rgb(205, 205, 205)"d="M0.455,9.617 L9.758,0.550 C9.977,0.336 10.329,0.336 10.548,0.550 C10.767,0.763 10.767,1.105 10.548,1.319 L1.641,9.999 L10.548,18.679 C10.767,18.893 10.767,19.235 10.548,19.448 C10.440,19.553 10.295,19.609 10.155,19.609 C10.014,19.609 9.870,19.557 9.762,19.448 L0.459,10.382 C0.240,10.172 0.240,9.826 0.455,9.617 Z"/></svg>'
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 1,
                dots: true,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    ////////////////////////////////////////////////////////
    if ($(window).width() < 768) {
        $(".foot-nav-links-header").addClass("moaccordion");
        $(".foot-links").addClass("mopanel");
    }
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    AOS.init();
});