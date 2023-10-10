//메인 섹션01 편집장의 선택


/*--------------- main_section01_list_04 json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/main_section01_list_04.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".section01_list_04 .swiper_wrapper .swiper_slider").eq(i).append("<div class='cover_goods'><a href='./sub.html' target='_self'><img src='img/"+data[i].url+"' alt='#'></a></div>");
                    $(".section01_list_04 .swiper_wrapper .swiper_slider").eq(i).append("<div class='text'><div class='title'><a href='./sub.html'>"+data[i].title+"</a></div><div class='sub'>"+data[i].sub+"</div></div>");
                }
            }
        }
    })
});



$(function () {
    var bookTitles = [
        "미래에서 온 남자 폰 노이만",
        "도시와 그 불확실한 벽",
        "어른을 키우는 어른을 위한 심리학",
        "옥수수 문명을 따라서",
        "살롱 드 경성",
        "하쿠메이와 미코치 8",
        "오십 이후, 삶을 바꾸는 6가지 습관",
        "촉진하는 밤",
        "아메리칸 프로메테우스",
        "너의 퀴즈",
        "고통에 관하여",
        "영장류, 사이보그 그리고 여자"
    ];

    var $swiperWrapper = $('.section01_list_01 .swiper_wrapper');

    // 반복문을 사용한 AJAX 데이터 값 요청
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // 결과 한 개만 보이도록 제한
            headers: { Authorization: "KakaoAK 6f9d9b75f2aae328ed0278e4fee08ffd" }
        })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0];

                    var $swiperSlider = $("<div class='swiper_slider'></div>");
                    var $cover = $("<div class='cover'></div>");

                    // 썸네일
                    $cover.append("<a href='./sub.html' target='_self'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목, 서브
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    var $contents = $("<div class='sub'>"+ book.contents +"</div>");
                    $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
                    
                    $text.append($title);
                    $text.append($contents);
                    $swiperSlider.append($text);

                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});

$(function () {
    var bookTitles = [
        "루나의 전세역전",
        "고통에 관하여",
        "베테랑의 몸",
        "최민준의 아들코칭 백과",
        "개의 설계사",
        "집착의 법칙",
        "철학이 내 손을 잡을 때",
        "촉진하는 밤",
        "눈부시게 불완전한",
        "공룡의 이동 경로",
        "1%를 읽는 힘",
        "도시와 그 불확실한 벽"
    ];

    var $swiperWrapper = $('.section01_list_02 .swiper_wrapper');

    // 반복문을 사용한 AJAX 데이터 값 요청
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // 결과 한 개만 보이도록 제한
            headers: { Authorization: "KakaoAK 6f9d9b75f2aae328ed0278e4fee08ffd" }
        })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0];

                    var $swiperSlider = $("<div class='swiper_slider'></div>");
                    var $cover = $("<div class='cover'></div>");

                    // 썸네일
                    $cover.append("<a href='./sub.html' target='_self'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목, 서브
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    var $contents = $("<div class='sub'>"+ book.contents +"</div>");
                    $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
                    
                    $text.append($title);
                    $text.append($contents);
                    $swiperSlider.append($text);

                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});

$(function () {
    var bookTitles = [
        "Art of Elemental",
        "Diary of a Wimpy Kid",
        "Breadsong : How Baking Changed Our Lives",
        "Princess in Black #7 : the Bathtime Battle",
        "Dune Part One: The Photography",
        "Thebes Land",
        "The Paper Dolls",
        "The Bad Guys #17 : The Bad Guys in Let the Games Begin!",
        "The Skull: A Tyrolean Folktale",
        "Dragon Masters #24: Dawn of the Light Dragon"
    ];

    var $swiperWrapper = $('.section01_list_03 .swiper_wrapper');

    // 반복문을 사용한 AJAX 데이터 값 요청
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // 결과 한 개만 보이도록 제한
            headers: { Authorization: "KakaoAK 6f9d9b75f2aae328ed0278e4fee08ffd" }
        })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0];

                    var $swiperSlider = $("<div class='swiper_slider'></div>");
                    var $cover = $("<div class='cover'></div>");

                    // 썸네일
                    $cover.append("<a href='./sub.html' target='_self'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목, 서브
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    var $contents = $("<div class='sub'>"+ book.contents +"</div>");
                    $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
                    
                    $text.append($title);
                    $text.append($contents);
                    $swiperSlider.append($text);

                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});


//탭 mouseover -> 탭 CSS 변경 및 슬라이드 버튼 변경
$(function () {
    var i = 0;
    $(".section01_tab >a").mouseover(function () {
        i = ($(this).index()) + 1;
        $(".section01_tab >a:nth-of-type" + "(" + i + ")").addClass('on').siblings().removeClass('on');
        $(".section01_contents > .swiper").hide();
        $(".section01_list_0" + i + " ").stop().show();
        $('.section01_btn > div').hide();
        $('.section01_btn > div').eq($(this).index()).css({ "display": "flex" });
    });
});

//슬라이드 이동 func

$(function () {
    //슬라이드 1 book type
    $(".section01_btn_editor").eq(0).find(".editor_button_next").click(function () {
        $('.section01_list_01 .swiper_wrapper').stop().animate({ marginLeft: -685 }, function () {
            $('.section01_list_01 .swiper_slider:first').appendTo('.section01_list_01 .swiper_wrapper');
            $('.section01_list_01 .swiper_slider:first').appendTo('.section01_list_01 .swiper_wrapper');
            $('.section01_list_01 .swiper_slider:first').appendTo('.section01_list_01 .swiper_wrapper');
            $('.section01_list_01 .swiper_slider:first').appendTo('.section01_list_01 .swiper_wrapper');
            $('.section01_list_01 .swiper_wrapper').css({ 'margin-left': 0 });
        });
    });

    $(".section01_btn_editor").eq(0).find(".editor_button_prev").click(function () {
        $('.section01_list_01 .swiper_slider:last').prependTo('.section01_list_01 .swiper_wrapper');
        $('.section01_list_01 .swiper_slider:last').prependTo('.section01_list_01 .swiper_wrapper');
        $('.section01_list_01 .swiper_slider:last').prependTo('.section01_list_01 .swiper_wrapper');
        $('.section01_list_01 .swiper_slider:last').prependTo('.section01_list_01 .swiper_wrapper');
        $('.section01_list_01 .swiper_wrapper').css({ marginLeft: -685 });
        $('.section01_list_01 .swiper_wrapper').stop().animate({ marginLeft: 0 });
    });

    //슬라이드 2 book type
    $(".section01_btn_editor").eq(1).find(".editor_button_next").click(function () {
        $('.section01_list_02 .swiper_wrapper').stop().animate({ marginLeft: -685 }, function () {
            $('.section01_list_02 .swiper_slider:first').appendTo('.section01_list_02 .swiper_wrapper');
            $('.section01_list_02 .swiper_slider:first').appendTo('.section01_list_02 .swiper_wrapper');
            $('.section01_list_02 .swiper_slider:first').appendTo('.section01_list_02 .swiper_wrapper');
            $('.section01_list_02 .swiper_slider:first').appendTo('.section01_list_02 .swiper_wrapper');
            $('.section01_list_02 .swiper_wrapper').css({ 'margin-left': 0 });
        });
    });

    $(".section01_btn_editor").eq(1).find(".editor_button_prev").click(function () {
        $('.section01_list_02 .swiper_slider:last').prependTo('.section01_list_02 .swiper_wrapper');
        $('.section01_list_02 .swiper_slider:last').prependTo('.section01_list_02 .swiper_wrapper');
        $('.section01_list_02 .swiper_slider:last').prependTo('.section01_list_02 .swiper_wrapper');
        $('.section01_list_02 .swiper_slider:last').prependTo('.section01_list_02 .swiper_wrapper');
        $('.section01_list_02 .swiper_wrapper').css({ marginLeft: -685 });
        $('.section01_list_02 .swiper_wrapper').stop().animate({ marginLeft: 0 });
    });

    //슬라이드 3 book type
    $(".section01_btn_editor").eq(2).find(".editor_button_next").click(function () {
        $('.section01_list_03 .swiper_wrapper').stop().animate({ marginLeft: -685 }, function () {
            $('.section01_list_03 .swiper_slider:first').appendTo('.section01_list_03 .swiper_wrapper');
            $('.section01_list_03 .swiper_slider:first').appendTo('.section01_list_03 .swiper_wrapper');
            $('.section01_list_03 .swiper_slider:first').appendTo('.section01_list_03 .swiper_wrapper');
            $('.section01_list_03 .swiper_slider:first').appendTo('.section01_list_03 .swiper_wrapper');
            $('.section01_list_03 .swiper_wrapper').css({ 'margin-left': 0 });
        });
    });

    $(".section01_btn_editor").eq(2).find(".editor_button_prev").click(function () {
        $('.section01_list_03 .swiper_slider:last').prependTo('.section01_list_03 .swiper_wrapper');
        $('.section01_list_03 .swiper_slider:last').prependTo('.section01_list_03 .swiper_wrapper');
        $('.section01_list_03 .swiper_slider:last').prependTo('.section01_list_03 .swiper_wrapper');
        $('.section01_list_03 .swiper_slider:last').prependTo('.section01_list_03 .swiper_wrapper');
        $('.section01_list_03 .swiper_wrapper').css({ marginLeft: -685 });
        $('.section01_list_03 .swiper_wrapper').stop().animate({ marginLeft: 0 });
    });

    //슬라이드 4 img type
    $(".section01_btn_goods .editor_button_next").click(function () {
        $('.section01_list_04 .swiper_wrapper').stop().animate({ marginLeft: -685 }, function () {
            $('.section01_list_04 .swiper_slider:first').appendTo('.section01_list_04 .swiper_wrapper');
            $('.section01_list_04 .swiper_slider:first').appendTo('.section01_list_04 .swiper_wrapper');
            $('.section01_list_04 .swiper_slider:first').appendTo('.section01_list_04 .swiper_wrapper');
            $('.section01_list_04 .swiper_wrapper').css({ marginLeft: 0 });
        });
    });

    $(".section01_btn_goods .editor_button_prev").click(function () {
        $('.section01_list_04 .swiper_slider:last').prependTo('.section01_list_04 .swiper_wrapper');
        $('.section01_list_04 .swiper_slider:last').prependTo('.section01_list_04 .swiper_wrapper');
        $('.section01_list_04 .swiper_slider:last').prependTo('.section01_list_04 .swiper_wrapper');
        $('.section01_list_04 .swiper_wrapper').css({ marginLeft: -685 });
        $('.section01_list_04 .swiper_wrapper').stop().animate({ marginLeft: 0 });
    });
});

//배너 슬라이드 버튼 click -> 슬라이드 & 페이지네이션 변경
$(function () {
    var i = 0;
    $(".section01_banner_wrap .swiper_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    $(".section01_banner_wrap .swiper_wrapper").on('afterChange', function (event, slick, currentSlide) {
        var i = currentSlide + 1;
        $(".section01_banner_wrap .swiper-pagination-current").text(i);
    })

    $(".section01_banner_wrap .swiper_btn_prev").click(function (e) {
        $(".section01_banner_wrap .swiper_wrapper").slick("slickPrev");
    });

    $(".section01_banner_wrap .swiper_btn_next").click(function (e) {
        $(".section01_banner_wrap .swiper_wrapper").slick("slickNext");

    });

});