$(document).ready(function() {

    router = new MainRouter();

    Backbone.history.start();


});

$.fn.scrollView = function() {
    return this.each(function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
}