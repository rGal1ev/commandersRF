'use strict'

const animationPlay = () => {
    const animationElements = document.querySelectorAll('[animation]') ;

    animationElements.forEach((element) => {
        const animationName = element.getAttribute('animation'),
        animationDelay = element.getAttribute('animation-delay');

        setTimeout(() => {
            element.classList.add(animationName);
            element.classList.remove('hidden');
        }, animationDelay)

    })
}

const burgerElement = document.querySelector('.menu__icon'),
navElement = document.querySelector('.header__nav');

burgerElement.addEventListener('click', () => {
    burgerElement.classList.toggle('_active');
    navElement.classList.toggle('_active');

    document.body.classList.toggle('_lock');
});

const swiperContainer = document.querySelector('.swiper')

if (swiperContainer) {
    const slider = new Swiper('.swiper', {
        followFinger: true,
    
        spaceBetween: 60,
        slidesPerView: 'auto',
        mousewheel: true,
    });
}


