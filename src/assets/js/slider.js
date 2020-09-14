$('.header__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.video__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.modal__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});
