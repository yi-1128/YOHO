//导航下拉效果
$('.li_grey').each(function(i,value){
    $(value).hover(
        function(){
            $(this).css({
                background : '#efefef'
            });
            $(this).find('.li_mark').each(function(i,value){
                $(value).css('display','block');
            })
        },
        function(){
            $(this).css({
                background : ''
            })
            $('.li_mark').each(function(i,value){
                $(value).css('display','none');
            })
        }
    )
})
//二维码
$('.reg b').hover(
    function(){
        $('.reg_mark').css('display','block');
    },
    function(){
        $('.reg_mark').css('display','none');
    }
)
