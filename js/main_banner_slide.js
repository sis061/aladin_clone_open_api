/*--------------- main_banner_slide json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/main_banner_slide.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".banner_slide_list .swiper_wrapper .swiper_slider").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='#'></a>");
                }
            }
        }
    })
});

//메인 슬라이드 배너 슬라이드 func
$(function () {
    setTimeout(function(){
        $(".banner_slide_list .swiper_wrapper").slick({
            slidesToScroll: 3,
            slidesToShow: 3,
            arrows: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        });
    },500);
    

    $(".banner_slide .circle_default_prev").click(function (e) {
        $(".banner_slide .swiper_wrapper").slick("slickPrev");
    });

    $(".banner_slide .circle_default_next").click(function (e) {
        $(".banner_slide .swiper_wrapper").slick("slickNext");
    });
});