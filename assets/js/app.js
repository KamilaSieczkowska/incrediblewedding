$( document ).ready(function() {



    function toggleMenu(){
        if ($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            $('#menu').removeClass('active-menu');
        }
        else {
            $(this).addClass('is-active');
            $('#menu').addClass('active-menu');
        }
    }

    $('#mobile-menu').on('click', function(){
        toggleMenu();
    });
    
    $('.nav__list li a').each(function(){
        var el = $(this);
        var target = el.attr('href');

        el.click(function(){
            // target.animatescroll({scrollSpeed: ($(this)).attr('data-speed')});
            $('#menu').removeClass('active-menu');
        })
    });

        
    
    // mobile slider settings
    $('#mobile-slider').slick({
        arrows: false,
        dots: true,
    });

              

    // init lightbox
    $('#gallery-btn').on('click', function() {
        $('#lightbox').addClass('active-lightbox');
        
        // init slick slider 
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<button class="arrow-prev slider-arrow" aria-label="Previous" type="button"><img src="assets/images/icons/angle-left.svg"></button>',
            nextArrow: '<button class="arrow-next slider-arrow" aria-label="Next" type="button"><img src="assets/images/icons/angle-right.svg"></button>'
        });
        
    });

    // close lightbox 
    $('.lightbox__close').on('click', function() {
        $('#lightbox').removeClass('active-lightbox');

        // kill slick slider
        // $('.slider-for').slick('unslick');
        // $('.slider-nav').slick('unslick');
    });


   


          
          




});