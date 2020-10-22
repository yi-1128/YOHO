//导航下拉效果
// public中

//二维码
$('.reg b').hover(
    function(){
        $('.reg_mark').css('display','block');
    },
    function(){
        $('.reg_mark').css('display','none');
    }
)

//普通登录
//邮箱手机号码验证
$('.main_big_right #uname').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('邮箱或手机号不合法').css('color','red');
    }
})
//验证密码
$('.main_big_right #upwd').blur(function(){
    var re = /^\d+$/g;
    if(re.test($(this).val())){
        $(this).next().text('合法').css('color','green');
    }else{
        $(this).next().text('密码不合法').css('color','red');
    }
})
