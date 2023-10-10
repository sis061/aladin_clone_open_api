
/*--------------- content 06 추천글 독자평 hover - box visible -------------------*/

$(function () {
    $('.recc_content li > div').hover(function () {
        $(this).children('.recc_box_hidden').css({ display: 'inline-block' });
    }, function () {
        $('.recc_box_hidden').hide();
    });
});

