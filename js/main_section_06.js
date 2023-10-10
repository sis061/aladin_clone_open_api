$(function () {
  var bookTitles = [
    "향수가 된 식물들",
    "도시와 그 불확실한 벽",
    "네 안에 잠든 거인을 깨워라 (30주년 기념판)",
    "챗GPT로 만나는 내:일",
    "소녀 동지여 적을 쏴라",
    "결심이 필요한 순간들",
    "또 못 버린 물건들",
    "일론 머스크",
    "아메리칸 프로메테우스",
    "푸틴을 죽이는 완벽한 방법",
    "고통에 관하여",
    "어린이 마음 약국 (친필 인쇄 사인본)",
    "백년다리",
    "상황과 이야기",
    "어린이를 위한 데일 카네기의 인간관계론",
  ];

  var $swiperWrapper = $(".section06 .swiper_wrapper");

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
        var $cover = $("<div class='cover'></div>");

        // 썸네일
        $cover.append(
          "<a href='./sub.html' target='_self'><img src='" +
            book.thumbnail +
            "' alt='" +
            book.title +
            "' /></a>"
        );
        $swiperSlider.append($cover);

        // 제목
        var $text = $("<div class='text'></div>");
        var $title = $("<div class='title'></div>");
        $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
        $text.append($title);
        $swiperSlider.append($text);

        $swiperWrapper.append($swiperSlider);
      }

      // 슬라이더 func
      $(function () {
        setTimeout(function () {
          $(".section06 .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true,
          });
        }, 500);

        $(".section06 .circle_default_prev").click(function (e) {
          $(".section06_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section06 .circle_default_next").click(function (e) {
          $(".section06_list .swiper_wrapper").slick("slickNext");
        });
      });
    });
  });
});
