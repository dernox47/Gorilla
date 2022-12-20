$('.nav__trigger').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('nav--active');
});