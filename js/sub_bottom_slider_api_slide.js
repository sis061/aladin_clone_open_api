/*--------------- 하단 슬라이더 kakaoAPI -------------------*/

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
        "도시와 그 불확실한 벽",
        "네 안에 잠든 거인을 깨워라",
        "슈퍼노멀",
        "집착의 법칙",
        "사람은 생각하는 대로 된다 (양장)",
        "세이노의 가르침",
        "그레이트 마인드셋"
    ];

    var $swiperWrapper = $('#bottom_bookbox_buy .swiper_wrapper');

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
                    $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");

                    $title.append("<a href='#'>" + book.title + "</a>");
                    $text.append($title);

                    $swiperSlider.append($text);
                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});

$(function () {
    var bookTitles = [
        "아메리칸 프로메테우스",
        "네 안에 잠든 거인을 깨워라",
        "베테랑의 몸",
        "삶의 의미와 위대한 철학자들",
        "사소한 추억의 힘",
        "죽음에도 지혜가 필요하다",
        "철학이 내 손을 잡을 때",
        "촉진하는 밤",
        "눈부시게 불완전한",
        "공룡의 이동 경로",
        "1%를 읽는 힘",
        "도시와 그 불확실한 벽",
        "10억짜리 독서법",
        "슈퍼노멀",
        "집착의 법칙",
        "사람은 생각하는 대로 된다 (양장)",
        "세이노의 가르침",
        "그레이트 마인드셋",
        "모형 마을",
        "수상한 국어 탐정단 5",
        "역행자 확장판",
        "원씽 The One Thing",
        "사장학개론",
        "힘든 일을 먼저 하라",
        "레버리지",
        "그릿 GRIT",
        "유연함의 힘"
    ];

    var $swiperWrapper = $('#bottom_bookbox_click .swiper_wrapper');

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
                    $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");

                    $title.append("<a href='#'>" + book.title + "</a>");
                    $text.append($title);

                    $swiperSlider.append($text);
                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});

/*--------------- 하단 슬라이더 slide func -------------------*/

$(function () {
    setTimeout(function () {
        $(".bottom_slider_wrap .swiper_wrapper").slick({
            slidesToScroll: 6,
            slidesToShow: 6,
            arrows: false,
            speed: 500,
            pauseOnHover: true,
            dots: true,
            dotsClass: "dots_custom"
        });
    }, 500);

});
