$(function () {
    var bookTitles = [
        "그럴 수 있어",
        "네 인생 우습지 않다",
        "구의 증명",
        "불온한 것들의 미학",
        "고통에 관하여"
    ];

    var $swiperWrapper = $('.section11 .swiper_wrapper');

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
                    $cover.append("<a href='./sub.html' target='_self'><div class='icon_audio'></div><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    $swiperSlider.append($cover);

                    // 제목
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
                    $text.append($title);
                    $swiperSlider.append($text);

                    $swiperWrapper.append($swiperSlider);
                }
            });
    });
});