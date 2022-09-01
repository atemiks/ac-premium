let headerContainer = $('.header-box');

function fixedHeader() {
    if(window.pageYOffset > 0) {
        $(headerContainer).addClass('is-fixed');
    }

    if(!window.pageYOffset > 0) {
        $(headerContainer).removeClass('is-fixed');
    }
}

window.addEventListener("load", fixedHeader);
window.addEventListener("scroll", fixedHeader);