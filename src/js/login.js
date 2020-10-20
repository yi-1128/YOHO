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

//密码登录和二维码登录切换
$('.main_big_right_sml .main_big_right_img').click(function(){
    $('.main_big_right_sml').css('display','none');
    $('.main_big_right_mm').css('display','block');
})
$('.main_big_right_mm .main_big_right_img').click(function(){
    // $('.main_big_right_num').off('click');
    // console.log('click');
    $('.main_big_right_mm').css('display','none');
    $('.main_big_right_sml').css('display','block');
})

//扫码登录和密码登录切换
$('.login_left').click(function() {
    $('.normal').css('display','block');
    $('.phone').css('display','none');
})
$('.login_right').click(function() {
    $('.phone').css('display','block');
    $('.normal').css('display','none');
})
//手机验证码登录和普通登录切换
$('.login_left').click(function(){
    $(this).addClass('active');
    $('.login_right').removeClass('active');
})
$('.login_right').click(function(){
    $(this).addClass('active');
    $('.login_left').removeClass('active');
})

//号码下拉列表
$(function(){
    $('.main_big_right_number').click(function(){
        //点击a标签
		if($('.mian_big_right_num').is(':hidden')){//如果当前隐藏
		    $('.mian_big_right_num').show();//那么就显示div
		}else{//否则
		    $('.mian_big_right_num').hide();//就隐藏div
		}
    })
})