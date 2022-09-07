$('.swiper-intro').each(function (_, container) {
    let jContainer = $(container),
        slides = $(jContainer).find('.swiper-slide');

    new Swiper(jContainer, {
        slidesPerView: 1,
        loop: slides.length > 1 ? true : false,
        observer: true,
        observeParents: true,

        pagination: {
            el: '.swiper-intro-pagination',
            type: 'bullets',
            clickable: true,
        },

        autoplay: {
            delay: 2000,
        },
    });
});


$('.section-partners').each(function (_, container) {
    let jContainer = $(container),
        sliderContainer = jContainer.find('.swiper-partners'),
        slides = jContainer.find('.swiper-slide'),
        prev = jContainer.find('.swiper-partners-button-prev'),
        next = jContainer.find('.swiper-partners-button-next');

    new Swiper(sliderContainer, {
        slidesPerView: 1,
        loop: slides.length > 1 ? true : false,
        observer: true,
        observeParents: true,
        breakpointsInverse: true,
        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
                loop: slides.length > 2 ? true : false,
            },
            // when window width is >= 750px
            750: {
                slidesPerView: 3,
                loop: slides.length > 3 ? true : false,
            }
        },

        navigation: {
            nextEl: next,
            prevEl: prev,
        }
    });
});

$('.card-project-gallery').each(function (_, container) {
    let jContainer = $(container),
        slides = $(jContainer).find('.card-project-slide'),
        prev = $(jContainer).find('.card-project-button-prev'),
        next = $(jContainer).find('.card-project-button-next');

    new Swiper(jContainer, {
        slidesPerView: 1,
        loop: slides.length > 1 ? true : false,
        observer: true,
        observeParents: true,
        breakpointsInverse: true,
        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 3,
                loop: slides.length > 3 ? true : false,
            }
        },

        navigation: {
            nextEl: next,
            prevEl: prev,
        },
    });
});


function initArticlesSlider() {
    $('.section-articles').each(function (_, container) {
        let jContainer = $(container),
            sliderContainer = jContainer.find('.swiper-articles'),
            slides = jContainer.find('.swiper-slide'),
            prev = jContainer.find('.swiper-articles-button-prev'),
            next = jContainer.find('.swiper-articles-button-next');
    
        new Swiper(sliderContainer, {
            slidesPerView: 1,
            loop: false,
            observer: true,
            observeParents: true,
            breakpointsInverse: true,
            breakpoints: {
                // when window width is >= 576px
                576: {
                    slidesPerView: 2,
                    loop: slides.length > 2 ? true : false,
                },
                // when window width is >= 970px
                970: {
                    slidesPerView: 3,
                    loop: slides.length > 3 ? true : false,
                }
            },
    
            navigation: {
                nextEl: next,
                prevEl: prev,
            }
        });
    });
}

function destroyArticlesSlider() {
    $('.section-articles').each(function (_, container) {
        let jContainer = $(container),
            sliderContainer = jContainer.find('.swiper-articles');
    
        sliderContainer[0].swiper.destroy();
    });
}


window.addEventListener("load", function() {
    if(!windowSizeHelper.isPhone()) {
        initArticlesSlider();
    }
});

beforeWindowWidthResizeFunctions.push(function() {
    // resize phone to tablet
    if(windowSizeHelper.isPhoneToTabletResize()) {
        initArticlesSlider();
    }

    // resize tablet to phone
    if(windowSizeHelper.isTabletToPhoneResize()) {
        destroyArticlesSlider();
    }
});