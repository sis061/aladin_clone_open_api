/*--------------- 하단 슬라이더 slide func -------------------*/

$(function () {
    $(".bookwrap_l .swiper_wrapper").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        speed: 500,
        infinite: false
    });

    $(".bookwrap_l .swiper_btn_prev").click(function (e) {
        $(".bookwrap_l .swiper_wrapper").slick("slickPrev");
        var currentIndex = $('.slick-current').attr('data-slick-index');
        currentIndex++;
        if (currentIndex == 1) {
            setTimeout(function () {
                $('.bookwrap_l .swiper_section').css({ opacity: '0' });
                $('#img_flip').show();
            }, 500);

        }
    });

    $(".bookwrap_l .swiper_btn_next").click(function (e) {
        $('#img_flip').hide();
        $('.bookwrap_l .swiper_section').css({ opacity: '1' });
        $(".bookwrap_l .swiper_wrapper").slick("slickNext");

        var currentIndex = $('.slick-current').attr('data-slick-index');
        currentIndex++;
        if (currentIndex == 9) {
            $('#img_last').delay(2000).css({ opacity: '1' });
            setTimeout(function () {
                $("#img_last").css({ opacity: '0' });
            }, 2000);
        }
    });
});
