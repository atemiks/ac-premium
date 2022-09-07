let headerContainer = $('.header-box');

function fixedHeader() {
    if(window.pageYOffset > 0) {
        $(headerContainer).addClass('is-scrolled');
    }

    if(!window.pageYOffset > 0) {
        $(headerContainer).removeClass('is-scrolled');
    }
}

window.addEventListener("load", fixedHeader);
window.addEventListener("scroll", fixedHeader);