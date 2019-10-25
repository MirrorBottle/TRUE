$('.carousel').carousel({
    interval: 3500,
    touch: true
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 350) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    }
});