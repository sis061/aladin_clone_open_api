/*--------------- main_section09_list json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/main_section09_list.json",
        dataType: "json",
        success : function(data){
            var $slideInner = $(".section09_list .swiper_wrapper .swiper_slider a");
            if(data.length>0){
                for(var i in data){
                    $slideInner.eq(i).append("<div class='cover'><img src='img/"+data[i].url+"' alt='"+data[i].title+"'></div>");
                    $slideInner.eq(i).append("<div class='text_tobecont'><div class='title'>"+data[i].title+"</div><div class='author'>"+data[i].author+"</div></div>");
                }
            }
        }
    })
});


//섹션 09 슬라이더 func
$(function () {
    setTimeout(function(){
        $(".section09_list .swiper_wrapper").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
            speed: 300,
            variableWidth: true
        });
    },500);

    $(".section09 .circle_default_prev").click(function (e) {
        $(".section09 .swiper_wrapper").slick("slickPrev");
    });

    $(".section09 .circle_default_next").click(function (e) {
        $(".section09 .swiper_wrapper").slick("slickNext");
    });
});