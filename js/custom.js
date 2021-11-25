$(function () {
    // Banner Slider

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
    });


    // About Video

    $('.venobox').venobox(); 

    // Testimonial Slider

    $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
    });

    // Counter Up
    $('.counter').counterUp();

    // Sponsor Slider

    $('.sponsor-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
    });
});