$(document).ready(function() {
    var owl = $('.myslider');
    owl.owlCarousel({
        items:1,
        loop:true,
        
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    var owl = $('.myslider2');
    owl.owlCarousel({
        items:4,
        loop:true,
        
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    
    
    $('#scroll').click(function() {
        console.log("Hello");
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".header-section .mynav .section-upper").addClass("scrolldown");
            $(".header-section .mynav .navbar .mynav").addClass("bottomscroll");
            


        } else {
            $(".header-section .mynav .section-upper").removeClass("scrolldown");
            $(".header-section .mynav .navbar .mynav").removeClass("bottomscroll");
        }
    });

    $('.section-projects #owl-carousel1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    
    

});
