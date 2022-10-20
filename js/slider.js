$(document).ready(function(){
    $('.projects_slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        touchThreshold:10,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
    });
});

$(document).ready(function(){
    $('.include_slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        touchThreshold:10,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
    });
});

$(document).ready(function(){
    $('.partners_slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        speed:1000,
        touchThreshold:10,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }
        ]

    });
});