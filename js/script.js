

$(document).ready(function () {
    $('.bars').click(function() {
        $('.sm-ul').slideToggle();
    });
})

$(function () {
    $('a').click(function () {
        $('.sm-ul').delay(500).slideUp();
    });
});

/* End Navbar */

/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */



/* Start Features */



/* Start About us */



$(function () {
    $('.aboutBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.about').offset().top - 100
        }, 700);
    });
});

/* End About us */




/* Start Suppliers */



$(function () {
    $('.suppliersBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.suppliers').offset().top - 250
        }, 1000)
    });
});



/* End Suppliers */



/* Start Suppliers */



$(function () {
    $('.foundersBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.founders').offset().top - 250
        }, 1000)
    });
});



/* End Suppliers */

/* Start slider of hot deals */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    pagination:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },

        850:{
            items:3
        },

        1500:{
            items :5
        }
    }
});



/* End slider of hot deals */


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.founders').offset().top - 250) {
            $('.founders').animate({
                opacity : 1,
            }, 600);
        }
    })
}) 


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.about').offset().top - 250) {
            $('.about').animate({
                opacity : 1,
            }, 600);
        }
    })
}) 




/* Start Contact */


$(function () {
    $('.contactBttn').click(function () {
        $('html, body').animate({
            scrollTop : $('.contact').offset().top
        }, 1000)
    });
});

/* End Contact */



/* Start Switch language */
$(document).ready(function () {
    $('.switch-ar').click(function () {
        // $('body').css({direction: "rtl"});
        $('nav button.div-ar, .main-ul').css({float: "left"});
        $('.div-ar').css({display:"block"});
        $('.div-en').css({display: "none"});
        $('.switch-ar').css({display:"none"});
        $('.switch-en').css({display:"block"});
        $('*').css({fontFamily : "El Messiri', sans-serif"});
        $('.slider').css({
            transform: "scale(1, 1)"
        });
        $('.slider-opacity h1, .slider-opacity p').css({
            transform: 'scale(1, 1)'
        })
    });

    $('.switch-en').click(function () {
        $('body').css({direction: "ltr"});
        $('nav .main-ul li, nav h1.div-ar').css({float:"left"});
        $('nav button.div-ar, .main-ul').css({float: "right"});
        $('.div-ar').css({display:"none"});
        $('.div-en').css({display: "block"});
        $('.switch-ar').css({display:"block"});
        $('.switch-en').css({display:"none"});
        $('.slider').css({
            transform: "scale(-1, 1)"
        });
        $('.slider-opacity h1, .slider-opacity p').css({
            transform: 'scale(-1, 1)'
        })
    });
});

/* End Switch Language */
