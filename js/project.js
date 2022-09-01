$('.project-gallery-toggle').on('click', function() {
    let target = $(this),
        targetFullText = $(target)[0].getAttribute('data-full-text'),
        targetShortText = $(target)[0].getAttribute('data-short-text'),
        galleryContainer = $(target).prev('.project-gallery-grid '),
        galleryItems = $(galleryContainer).find('.project-gallery-item');

    for(let i = 7; i < galleryItems.length; i++) {
        $(galleryItems[i]).slideToggle();
    }

    $(target).toggleClass('active');

    if($(target).hasClass('active')) {
        $(target)[0].textContent = targetShortText
    }
    
    if(!$(target).hasClass('active')) {
        $(target)[0].textContent = targetFullText;

        $('html, body').animate({
            scrollTop: $(galleryContainer).offset().top - parseInt($('body').css('padding-top'))
        }, 500);
    }
});