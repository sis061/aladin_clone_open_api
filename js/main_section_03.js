$(function () {
  var bookTitles = [
    "서사의 위기",
    "연남동 빙굴빙굴 빨래방",
    "달의 아이",
    "사는 게 고통일 때, 쇼펜하우어",
    "머니 트렌드 2024",
    "라캉, 바디우, 들뢰즈의 세계관",
    "순도 100퍼센트의 휴식",
    "또 못 버린 물건들",
    "다시, 케인스",
    "아주 희미한 빛으로도",
  ];

  var $swiperWrapper = $(".section03 .swiper_wrapper");

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

        // 썸네일, 호버 레이어
        $cover.append(
          "<a href='./sub.html' target='_self'><img src='" +
            book.thumbnail +
            "' alt='" +
            book.title +
            "' /></a>"
        );
        var $btnlayer = $("<div class='section03_btnlayer'></div>");
        $btnlayer.append("<a href='#'>장바구니에 담기</a>");
        $btnlayer.append("<a href='#'>구매했어요</a>");
        $btnlayer.append("<a href='#'>관심없어요</a>");
        $cover.append($btnlayer);

        $swiperSlider.append($cover);

        // 제목
        var $text = $("<div class='text'></div>");
        var $title = $("<div class='title'></div>");
        $title.append("<a href='#'>" + book.title + "</a>");
        $text.append($title);
        $swiperSlider.append($text);

        $swiperWrapper.append($swiperSlider);
      }

      // 슬라이더 func
      $(function () {
        setTimeout(function () {
          $(".section03 .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true,
          });
        }, 500);

        $(".section03 .circle_default_prev").click(function (e) {
          $(".section03_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section03 .circle_default_next").click(function (e) {
          $(".section03_list .swiper_wrapper").slick("slickNext");
        });
      });

      //섹션03 책 hover -> 내부 div show
      $(function () {
        $(".section03_list .swiper_slider").hover(
          function () {
            $(this).find(".section03_btnlayer").show();
          },
          function () {
            $(".section03_btnlayer").hide();
          }
        );
      });
    });
  });
});
