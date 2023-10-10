//메인 배너 width:100%
$(function () {
    //초기값 설정
    var slideIndex = 1;
    var slides = $(".full_width_banner .swiper_wrapper>div");
    var curr = $(".full_width_banner .swiper-pagination-current");

    //슬라이드 인덱스 지정 func
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }
    function showSlides(n) {
        let i;
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
    }
    //슬라이드 페이드인/아웃 
    //첫 슬라이드 제외 숨김
    $(".full_width_banner .swiper_wrapper .swiper_slider:gt(0)").hide();

    $(".full_width_banner .swiper_btn_next").click(function () {
        $('.full_width_banner .swiper_wrapper .swiper_slider:first')
            .fadeOut(300)
            .next()
            .fadeIn(300)
            .end()
            .appendTo('.full_width_banner .swiper_wrapper');
        plusSlides(1);
        curr.text(slideIndex);
    });

    $(".full_width_banner .swiper_btn_prev").click(function () {
        $('.full_width_banner .swiper_wrapper .swiper_slider:last')
            .prependTo('.full_width_banner .swiper_wrapper')
            .fadeIn(300)
            .next()
            .fadeOut(300)
            .end()
        plusSlides(-1);
        curr.text(slideIndex);
    });
});