
/*------------ 도서 이미지 회전 func ------------*/

$(function () {
    var isRotated = false;
    $(".book").on("click", function () {
        if (isRotated) {
            $(this).css("transform", "rotateY(35deg)");
            isRotated = false;
        } else {
            $(this).css("transform", "rotateY(180deg)");
            $("#img_flip section").css("perspective", "none");
            isRotated = true;
        }
    });

    $(".book").hover(
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(35deg)");
            }
        },
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(0deg)");
            }
        }
    );
});
