
// paralax
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    const target0 = document.querySelector('.aboutus_img');
    const target = document.querySelector('.parallax_img');
    const target2 = document.querySelector('.honor');
   //  parallax.style.backgroundPositionY = offset * 0.2 + "px";
   // var value = window.scrollY;
   target.style.backgroundPositionY = offset * 0.2 + "px";
   target0.style.backgroundPositionY = offset * 0.2 + "px";
   target2.style.backgroundPositionY = offset * 0.4 + "px";
})

$(function() {
    
    "use strict";
 
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    // //   Hero Section - Background Parallax
    // background_image_parallax($(".tm-parallax"), 0.30, false);
    // background_image_parallax_2($("#contact"), 0.80);   
    // background_image_parallax_2($("#testimonials"), 0.80);   
    
    // // Handle window resize
    // window.addEventListener('resize', function(){
    //   background_image_parallax($(".tm-parallax"), 0.30, true);
    // }, true);



    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
        }
    });

    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Sidebar

    $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').addClass('open');
    });

    $('[href="#close"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').removeClass('open');
    });
    
    
    //===== Slick

    $('.slider-items-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //===== slick Testimonial Four
    
    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        infinite: true,
       autoplay: true,
        autoplaySpeed:3000,
        speed: 800,
        slidesToShow: 1,
    });
    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:false
      },
      callbacks: { 
      afterClose: function() { 
          console.log("close----")
          $(window).scrollTop(1900)
      }
    }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 500){
            $('#back-to-top').fadeIn(200)        
        } else{
            $('#back-to-top').fadeOut(200)
        }
        if($(this).scrollTop() > 4200){
            $('#About_US').fadeIn(200)
        }else{
            $('#About_US').fadeOut(200)
        }
    });

   
    
    
    //Animate the scroll to yop
    $('#back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
    

    
    //===== 
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: $('.pre_btn'),
        prevArrow: $('.next_btn'),
        autoplaySpeed: 2000,
      });	
    
        	// Scroll animation init 加载滑入
	window.sr = new scrollReveal();
    
  
});

// ===============no jq

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
       
    } else {
        document.getElementById("back-to-top").style.display = "none";
      
    }
    if (document.body.scrollTop > 4200 || document.documentElement.scrollTop > 4200) {
        document.getElementById("About_US").style.display = "block";
    }else{
        document.getElementById("About_US").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// repeat scrollReveal
(function(){
    window.scrollReveal = new scrollReveal({ reset: true});
})()