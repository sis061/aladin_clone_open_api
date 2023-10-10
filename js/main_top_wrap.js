
//메인 top wrap func
$(function () {
    //초기값 지정
    var TopSlide = $('.main_top_contents .swiper_wrapper');
    var TopSlideTab = $('.main_top_tab .swiper_slider');

    //탭 마우스 올릴때 슬라이드 이동 func

    $(TopSlideTab).hover(function () {
        var i = $(this).index();

        $('.main_top_contents .swiper_slider').hide().stop().animate({ marginLeft: '1020px' });
        $('.main_top_contents .swiper_slider').eq(i).show().stop().animate({ marginLeft: '0px' });
        $('.main_top_contents .swiper_slider').eq(i + 1).css({ position: 'absolute' }).show();

    }, function () {

        $('.main_top_contents .swiper_slider').css({ position: 'relative' }).show().stop().animate({ marginLeft: '0px' });
        mainTopSlide();
    });

    //탭 마우스 올릴때 탭 css 변경 func
    $(TopSlideTab).mouseover(function () {
        $('#topbannertab_wrapper > div').eq($(this).index()).addClass('main_top_tab_selected').siblings().removeClass('main_top_tab_selected');
    });

    // 슬라이드 이동 위한 초기값 지정
    var currentIndex = 0;
    $('#topbannertab_wrapper > div').eq(0).addClass('main_top_tab_selected').siblings().removeClass('main_top_tab_selected');

    // 슬라이드 이동 func
    function mainTopSlide() {
        currentIndex = (currentIndex + 1) % $(TopSlideTab).length;
        $('.main_top_contents .swiper_slider').hide();
        $('.main_top_contents .swiper_slider').eq(currentIndex).show();
        // 슬라이드 이동 및 인덱스 따라서 탭 CSS 변경 func
        $('#topbannertab_wrapper > div').eq(currentIndex).addClass('main_top_tab_selected').siblings().removeClass('main_top_tab_selected');
    };

    var TopSlideInterval = setInterval(mainTopSlide, 2000);

    // 마우스 hover -> 슬라이드 이동&정지 func
    $(TopSlideTab).hover(function () {
        clearInterval(TopSlideInterval);
    }, function () {
        TopSlideInterval = setInterval(mainTopSlide, 2000);
    });

    mainTopSlide();
});