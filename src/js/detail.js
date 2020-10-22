//尺码信息改变
$('.size span').each(function(i,value){
    $(this).click(function(){
        $('.size_mark span').eq(i).css('display','block').siblings().css('display','none');
    })
})
// 商品数量改变
$('.msg .num button:first').click(function(){
    var num = parseInt($(this).next().val());
    if(num > 1){
        $(this).next().val(num-1);
    }else{
        $(this).next().val(1);
    }
})
$('.msg .num button:last').click(function(){
    var num = parseInt($(this).prev().val()) ;
    $(this).prev().val(num+1);
})
$('.num').find('input').blur(function(){
    var re = /^\d+$/g;
    if(re.test(re)){
        $(this).val();
    }else{
        $(this).val(1);
    }
})
//售后服务
var flag = true;
$('.msg10 a').click(function(){
    if(flag){
        $(this).find('span').css('transform','rotate(270deg)');
        $(this).next().css('display','block');
        $('.msg10_mark').animate({
            top : 0
        },500);
        flag = false;
    }else{
        $(this).find('span').css('transform','rotate(90deg)');
        
        $('.msg10_mark').animate({
            top : "-100%"
        },500);
        $(this).next().css('display','none');
        flag = true;
    }
})