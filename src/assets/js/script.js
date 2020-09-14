$(document).ready(function () {
    @@include('slider.js');
    const popup = () => {
        function bindModal(btnSel, popupSel, closeSel) {
            const popup = $(popupSel);
            const close = $(closeSel);
            const trigger = $(btnSel);
    
            $(trigger).on('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                $(popup).css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                $("body").css("overflow", "hidden");
            });
    
            $(close).on('click', () => {
                $(popup).css({
                    "visibility": "",
                    "opacity": ""
                });
                $("body").css("overflow", "");
            });
    
            $(popup).on('click', (e) => {
                if (e.target === popup) {
                    $(popup).css({
                        "visibility": "",
                        "opacity": ""
                    });
                    $("body").css("overflow", "");
                };
            });
        }
        bindModal('.catalog__btn', '.modal__catalog', '.modal__close');
        bindModal('.footer__btn', '.modal__request', '.modal__close');
    };
    popup();
    let headerNavbar = $('.header__navbar');
    let headerMenu = $('.header__menu');
    let headerBurg = $('.header__burgmenu');
    $(function() {
        headerBurg.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass("burg--active");
            headerMenu.toggleClass('header__menu--active');
            headerNavbar.toggleClass('header__navbar--active')
            if(e.target) {
                $('body').toggleClass('body-overflow');
            }
        }); 
    });
    
    $(function(e) {
        e.preventDefault;
        $('.header__item').click(function() {
            $(this).parent().removeClass('header__menu--active');
            headerBurg.removeClass('burg--active');
            $('body').removeClass('body-overflow');
        });
    });
});