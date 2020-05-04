function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');


        if (menu.hasClass('burger-menu_active')) {
            // $('body').css('overflow', 'hidden');


            const block = $('html').scrollTop();
            $(window).on('scroll', () => $('html').scrollTop(block));
        } else {
            // $('body').css('overflow', 'visible');


            $(window).off('scroll');
        }
    }
}

burgerMenu('.burger-menu');