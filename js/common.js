//scrollTop Btn func
$(function () {
    $('.btn_scrollTop').click(function () {
        $('html, body').animate({ scrollTop: '0' }, 680);
    });
});

//메인 슬라이드 좌우버튼 : right click -> left show func
$(function () {
    $(".circle_default_next").on("click", function () {
        $(this).siblings(".circle_default_prev").show();
    });
});