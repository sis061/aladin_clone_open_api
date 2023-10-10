/*--------------- content 02 이벤트 slide json/ajax -------------------*/

$(function(){
    $.ajax({
        url: "./json/sub_content_02_event_slide.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $(".event_content .swiper_slider").eq(i).append("<a href='#'><img src='img/"+data[i].url+"' alt=''></a>");
                    $(".event_content .swiper_slider").eq(i).append("<div class='event_title'>"+data[i].title+"</div>");
                }
            }
        }
    })
});


/*--------------- content 02 이벤트 slide func -------------------*/

$(function () {
    setTimeout(function(){
        $(".event_content .swiper_wrapper").slick({
            slidesToScroll: 3,
            slidesToShow: 3,
            arrows: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            dots: true,
            dotsClass: "dots_custom"
        });
    },300)
});

