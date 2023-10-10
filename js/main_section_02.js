


/*--------------- main_section02_ebook_banner_wrap json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/main_section02_ebook_banner_wrap.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".section02_ebook_banner_wrap .swiper_wrapper .swiper_slider").eq(i).append("<a href='./sub.html' target='_self'><img src='img/"+data[i].url+"' alt='#'></a>");
                }
            }
        }
    })
});

//섹션02 어제 베스트셀러 배너 슬라이드 autoslide & 버튼 click -> 슬라이드 & 페이지네이션 변경

$(function () {
    var i = 0;
    setTimeout(function(){
        $(".section02_ebook_banner_wrap .swiper_wrapper").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false
        });
    },500);
    

    $(".section02_ebook_banner_wrap .swiper_wrapper").on('afterChange', function (event, slick, currentSlide) {
        var i = currentSlide + 1;
        $(".section02_ebook_banner_wrap .swiper-pagination-current").text(i);
    })

    $(".section02_ebook_banner_wrap .swiper_btn_prev").click(function (e) {
        $(".section02_ebook_banner_wrap .swiper_wrapper").slick("slickPrev");
    });

    $(".section02_ebook_banner_wrap .swiper_btn_next").click(function (e) {
        $(".section02_ebook_banner_wrap .swiper_wrapper").slick("slickNext");

    });
});