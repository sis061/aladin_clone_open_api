/*--------------- main_section05_list json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/main_section05_list.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".section05_list .swiper_wrapper .swiper_slider").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt='"+data[i].title+"'><div class='title_gift'>"+data[i].title+"</div></a>");
                }
            }
        }
    })
});


//섹션 05 슬라이더 func
$(function () {
    setTimeout(function(){
        $(".section05_list .swiper_wrapper").slick({
            slidesToScroll: 3,
            slidesToShow: 3,
            arrows: false,
            speed: 300,
            variableWidth: true
        });
    },500);
   

    $(".section05 .circle_default_prev").click(function (e) {
        $(".section05 .swiper_wrapper").slick("slickPrev");
    });

    $(".section05 .circle_default_next").click(function (e) {
        $(".section05 .swiper_wrapper").slick("slickNext");
    });
});