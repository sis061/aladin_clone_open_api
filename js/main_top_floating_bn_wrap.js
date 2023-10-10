
//메인 top 팝업 배너 func

$(function () {
    //멀티페이지 지정
    $('.popup_banner_box').show();
    $(".popup_banner_img > a:nth-of-type(1)").show();
    var i = 0;
    $(".popup_banner_tab >a").click(function () {
        i = ($(this).index()) + 1;
        //팝업이 열려있을 경우
        if ($(".popup_banner_box").is(":visible") == true) {
            //해당 탭과 일치하지 않는 팝업이미지 열려있을 경우 -> 해당 이미지 교체
            if ($(".popup_banner_img > a:nth-of-type" + "(" + i + ")").is(":visible") == false) {
                $(".popup_banner_img > a").hide();
                $(".popup_banner_img > a:nth-of-type" + "(" + i + ")").stop().show();
            } else {
                //해당 탭과 일치하는 팝업이미지 열려있을 경우 -> 팝업 닫음
                $('.popup_banner_box').hide('slow');
            }
        } else {
            //팝업이 닫혀있을 경우 해당 탭 클릭 -> 해당 이미지& 팝업 열림
            $('.popup_banner_box').show('slow');
            $(".popup_banner_img > a").hide();
            $(".popup_banner_img > a:nth-of-type" + "(" + i + ")").show();
        }
    });

    //메인 top 팝업 배너 닫기 버튼 func
    $('.popup_banner_btn').click(function () {
        $('.popup_banner_box').hide('slow');
    });
});