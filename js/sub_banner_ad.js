/*--광고 배너 json--*/

$(function(){
    $.ajax({
        url: "./json/sub_banner.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data){
                    $("#ADsponsor0 li").eq(i).append("<a href='./sub.html' target='_self'><img src='img/"+data[i].url+"'></a>");
                }
            }
        }
    })
});