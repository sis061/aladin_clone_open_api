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
    "영장류, 사이보그 그리고 여자",
  ];

  var $swiperWrapper = $(".section10 .swiper_wrapper");

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

        // 제목, 서브
        var $text = $("<div class='text_type2'></div>");
        var $title = $("<div class='title'></div>");
        var $contents = $("<div class='sub'>" + book.contents + "</div>");
        $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");

        $text.append($title);
        $text.append($contents);
        $swiperSlider.append($text);

        $swiperWrapper.append($swiperSlider);
      }

      // 슬라이더 func
      $(function () {
        setTimeout(function () {
          $(".section10 .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true,
          });
        }, 500);

        $(".section10 .circle_default_prev").click(function (e) {
          $(".section10_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section10 .circle_default_next").click(function (e) {
          $(".section10_list .swiper_wrapper").slick("slickNext");
        });
      });
    });
  });
});
