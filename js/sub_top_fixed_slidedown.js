/*------- 상단 고정 팝업 slidedown func-------*/

$(function () {
    $(document).scroll(function () {
        var currentScrollValue = $(window).scrollTop()
        if (currentScrollValue > 1200) {
            $(".top_fixed_slidedown").show().css({ 'transform': 'translate(0, 0)', 'transition': '0.5s' });
        } else {
            $(".top_fixed_slidedown").css('transform', 'translate(0, -150px)');
        }
    });
});
