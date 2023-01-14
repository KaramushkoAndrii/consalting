//Инициализация слайдера
const sliderWebnauts = new Swiper ('.webnauts__swiper', {
    //Навигация
    navigation: {
        nextEl:'.webnauts__navigation-button--next',
        prevEl:'.webnauts__navigation-button--prev'
    },
    //Пагинация
    pagination: {
        el: '.webnauts__pagination',
        type: 'fraction',
    },
    grabCursor: true,

    //Навигация по хешу
    hashNavigation: true,

    //Отступы между слайдами
    spaceBetween: 100,

    //Бесконечная прокрутка
    loop:true,

    //Автопрокрутка
    /*autoplay: {
        //Скорость автопрокрутки
        delay: 8000,

        //Будет ли работать слайдер атоматически после взаимодействия с пользователем
        disableOnInteraction: false,

        //Остановка автропрокрутки при наведении мыш на слайдер
        pauseOnMouseEnter: true,
    },*/

    //Эфект смены слайда
    effect: 'fade',
    fadeEffect: {

        //Двойная смена слайда
      crossFade: true
    },
});

const sliderInner = new Swiper ('.swiper-3', {
    nested: true,
    spaceBetween: 30,
    effect: 'fade',
    thumbs: {
        swiper: {
            el:'.swiper-3-mini',
            slidesPerView: 4.3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            nested:true,
        }
    }
})

const sliderReview = new Swiper ('.another__slider', {
    navigation: {
        nextEl: '.another__button-next',
        prevEl: '.another__button-prev',
    },
    spaceBetween: 20,
    speed: 1000,
    effect: 'flip',
})