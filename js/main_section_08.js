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
    "슬픈 세상의 기쁜 말",
    "폴 오스터 ",
    "안녕 주정뱅이",
    "갈매기에게 나는 법을 가르쳐준 고양이",
    "담을 넘은 아이",
    "말하기를 말하기",
    "너의 췌장을 먹고 싶어",
    "우리는 매일매일",
    "내 마음 ㅅㅅㅎ",
    "조지 오웰 소설 전집",
    "빈방의 빛 : 시인이 말하는 호퍼",
    "결심이 필요한 순간들",
    "또 못 버린 물건들",
    "행복한 청소부",
    "왜 세계의 절반은 굶주리는가?",
    "농부 달력",
    "더 좋은 삶을 위한 철학",
    "어린이 마음 약국 (친필 인쇄 사인본)",
    "공정하다는 착각",
    "훔쳐가는 노래",
  ];

  var $swiperWrapper = $(".section08 .swiper_wrapper");

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
          "<a href='#'><img src='" +
            book.thumbnail +
            "' alt='" +
            book.title +
            "' /></a>"
        );
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
          $(".section08 .swiper_wrapper").not(".slick-initialized").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true,
          });
        }, 500);

        $(".section08 .circle_default_prev").click(function (e) {
          $(".section08_list .swiper_wrapper").slick("slickPrev");
        });

        $(".section08 .circle_default_next").click(function (e) {
          $(".section08_list .swiper_wrapper").slick("slickNext");
        });
      });
    });
  });
});
