$(function () {
  var bookTitles = [
    "나니아 연대기",
    "혼자를 기르는 법 1~2 세트 - 전2권",
    "사유 식탁",
    "영화를 찍으며 생각한 것 (리커버 특별판)",
    "정의란 무엇인가",
    "도어",
    "책과 우연들",
    "1차원이 되고 싶어",
    "올리브 키터리지",
  ];

  var $swiperWrapper = $(".section04 .swiper_wrapper");

  // 반복문을 사용한 AJAX 데이터 값 요청
  bookTitles.forEach(function (title) {
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: $.param({ query: title, size: 1 }), // 결과 한 개만 보이도록 제한
      headers: { Authorization: "KakaoAK 6f9d9b75f2aae328ed0278e4fee08ffd" },
    }).done(function (msg) {
      if (msg.documents.length > 0) {
        var book = msg.documents[0];

        var $swiperSlider = $("<div class='swiper_slider'></div>");
        var $swiperSliderFlex = $(
          "<div class='swiper_slider_flex_wrap'></div>"
        );
        var $cover = $("<div class='cover'></div>");

        // 썸네일
        $cover.append(
          "<a href='./sub.html' target='_self'><img src='" +
            book.thumbnail +
            "' alt='" +
            book.title +
            "' /></a>"
        );
        $swiperSliderFlex.append($cover);

        // 제목
        var $text = $("<div class='text_right'></div>");
        var $title = $("<div class='title'></div>");
        var $contents = $(
          "<div class='sub'><a href='./sub.html' target='_self'>" + book.contents + "</a></div>"
        );
        $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
        $text.append($title);
        $text.append($contents);
        $swiperSliderFlex.append($text);

        $swiperSlider.append($swiperSliderFlex);
        $swiperWrapper.append($swiperSlider);
      }

      //섹션 04 슬라이더 func
      $(function () {
        setTimeout(function () {
          $("#section04_list .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 3,
            slidesToShow: 3,
            arrows: false,
            speed: 300,
          });
        }, 500);

        $(".section04 .circle_default_prev").click(function (e) {
          $("#section04_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section04 .circle_default_next").click(function (e) {
          $("#section04_list .swiper_wrapper").slick("slickNext");
        });
      });
    });
  });
});
