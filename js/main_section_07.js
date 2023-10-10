$(function () {
  var bookTitles = [
    "고양이를 버리다",
    "글쓰기 신공 5W4H1T",
    "스펀지생지",
    "올 댓 두부 All that BEANS",
    "손글씨 교정 노트 바르다",
    "[세트] 문어 1~2 세트 - 전2권",
    "메타버스 투자의 정석",
    "대단한 고대 생물 도감",
    "13세, 우리 아이와 돈 이야기를 시작할 때",
    "스피드 두뇌게임북 : 숨은그림찾기, 다른그림찾기, 미로찾기",
  ];

  var $swiperWrapper = $(".section07 .swiper_wrapper");

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

        // 제목, 가격
        var $text = $("<div class='text_price'></div>");
        var $title = $("<div class='title'></div>");
        var $price = $("<div class='price'></div>");
        var $sale_price = book.sale_price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $title.append("<a href='./sub.html' target='_self'>" + book.title + "</a>");
        $price.append($sale_price + "원");

        $text.append($title);
        $text.append($price);
        $swiperSlider.append($text);

        $swiperWrapper.append($swiperSlider);
      }

      // 슬라이더 func
      $(function () {
        setTimeout(function () {
          $(".section07 .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true,
          });
        }, 500);

        $(".section07 .circle_default_prev").click(function (e) {
          $(".section07_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section07 .circle_default_next").click(function (e) {
          $(".section07_list .swiper_wrapper").slick("slickNext");
        });
      });
    });
  });
});
