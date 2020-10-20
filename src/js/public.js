// 回到顶部按钮
$('.to_top .to_top_ewm').hover(
    function(){
        $('.to_top_mark').css('opacity','1');
    },
    function(){
        $('.to_top_mark').css('opacity','0');
    }
)
$(function() {
    $('.to-top').toTop();
    $('.to_top').toTop();
    $('.to_top').off('click');
});

//右侧广告框
$('.ad .close').click(function(){
    $('.ad').css('display','none');
})