//header_banner_wrap 버튼 클릭 시 slideUp으로 사라지는 func
$(function () {
    $('.header_banner_btn').click(function () {
        $('#header_banner_wrap').slideUp();
    });
});

//header_top_wrap nav hover -> 드롭다운 카테고리 func
$(function () {
    $('#header_top_gnb > li').hover(function () {
        $(this).children('.header_dropdown').show();
    }, function () {
        $(this).children('.header_dropdown').hide();
    });

    $('#header_top_login > li').hover(function () {
        $(this).children('.header_dropdown').show();
    }, function () {
        $(this).children('.header_dropdown').hide();
    });
});

//header_middle func
$(function () {
    //header_middle searchbox searchopt list click -> searchopt로 text 대치 func
    $('.search_box_searchopt_list li').click(function () {
        let txtchg1 = $(this).text();
        $('.search_box_searchopt').text(txtchg1);
        $('.search_box_searchopt_list').hide();
    });

    //header_middle searchbox searchopt 통합검색 hover -> 드롭다운 카테고리 func

    $('.search_box_searchopt').mouseenter(function () {
        $('.search_box_searchopt_list').show();
    });

    $('.searchbox').mouseleave(function () {
        $(this).children('.search_box_searchopt_list').hide();
    });

    $('.search_box_searchopt_list').children().mouseleave(function () {
        $('.search_box_searchopt_list').hide();
    });
});

//header_bottom func
$(function () {
    //header_bottom_l 분야보기 hover -> 드롭다운 카테고리 func
    $(".header_bottom_l li").hover(function () {
        $(this).children("div").show();
    }, function () {
        $(this).children("div").hide();
    });

    //header_bottom_l 드롭다운 카테고리 닫기 btn func
    $('.menu_close').click(function () {
        $('.header_bottom_menu').hide();
    });

    //header_bottom_r hover -> 드롭다운 카테고리 func
    $(".header_bottom_r li").hover(function () {
        $(this).children("div").show();
    }, function () {
        $(this).children("div").hide();
    });
});