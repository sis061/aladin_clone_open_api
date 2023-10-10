
/*--------------- content 05 책속에서 더보기, 접기 func -------------------*/


$(function () {
    $('.refer_content_textbox').each(function (i, item) {
        $('.refer_content_textbox').eq(i).find('span:first').find('a').click(function () {
            $('#u3_' + (i + 1) + '').hide();
            $('#u3_' + (i + 1) + '_more').show();
        });
        $('.refer_content_textbox').eq(i).find('span:last-of-type').find('a').click(function () {
            $('#u3_' + (i + 1) + '').show();
            $('#u3_' + (i + 1) + '_more').hide();
        });
    });
});

