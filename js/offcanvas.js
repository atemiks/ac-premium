let offcanvasContainer = $('.offcanvas'),
    offcanvasCloseButton = offcanvasContainer.find('.offcanvas-close'),
    offcanvasOpenButton = $('.header-burger');

function openOffcanvas() {
    offcanvasContainer.addClass('is-animate is-open');
}

function closeOffcanvas() {
    offcanvasContainer.removeClass('is-open');
}

$(function () {
    $(offcanvasOpenButton).on('click', openOffcanvas);
    $(offcanvasCloseButton).on('click', closeOffcanvas);
});


/* todo */
// beforeWindowWidthResizeFunctions.push(function () {
//     if (windowSizeHelper.isMobileToDesktopResize()) {
//         closeOffcanvas();
//     }
// });

// document.addEventListener('DOMContentLoaded', function (){
//     $(document).on('click', '#backdrop', closeOffcanvas);
// })