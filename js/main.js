/* global $, alert, conso */

$(function () {

    "use strict";

    // adjust my header here
    var myheader = $('.header');

    myheader.height($(window).height());

    $(window).resize(function () {

        myheader.height($(window).height());

        // ajust slider li to be center in my web side

        $('.slider').each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);

        });

    });

    // ajust slider li to be center in my web side

    $('.slider').each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);

    });

    // add the bxslider here 

    $('.slider').bxSlider();

    // Trigger MixitUp

    $('#container').mixItUp();



    // Adjust Shuffle Links

    $('.shuffle li').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');

    });



    // Our Auto Slider Code
    (function autoSlider() {

        $('.myslider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.myslider div').eq(0).addClass('active').fadeIn(1000);

                    autoSlider();

                });

            }

        });

    }());


    // Show Or Hide Menue
    $(".fa-bars").click(function () {

        $(".links").toggleClass("hidemenu")
    })

    // Smoothly Scroll To Elment
    $(".links ul li a").click(function (e) {

        e.preventDefault();

        $(".links").toggleClass("hidemenu");

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        });

    });

    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })

});
