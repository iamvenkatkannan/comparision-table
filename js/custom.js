$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    var set = 0;
    $('.menu_icon,.close_icon,.overlay').click(function () {
        if (set == 0) {
            $('.side_bar').delay('1000').css({
                'transition': 'all ease 0.4s',
                'transform': 'translateX(0%)',
                'opacity': '1',
                'visibility': 'visible',
            });
            $('.overlay,.exit').fadeIn();
            $('body').css('overflow', 'hidden');
            set = 1;
        } else {
            $('.side_bar').delay('1000').css({
                'transition': 'all ease 0.4s',
                'transform': 'translateX(-100%)',
                'opacity': '0',
                'visibility': 'hidden',
            });
            $('.overlay,.exit').fadeOut();
            $('body').css('overflow', 'auto');
            set = 0;
        }
    });
});