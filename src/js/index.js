/*header */
$('.h_left').mouseenter(function(){
    $(this).css('background','#dcdcdc');
    $('.h_mark').css('display' , 'block').animate({
        top : 32
    });
})
$('.h_left').mouseleave(function(){
    $(this).css('background','');
    $('.h_mark').css('display' , 'none');
})
$('.h_mark').mouseenter(function(){
    $('.h_left').css('background','#dcdcdc');
    $('.h_mark').css('display' , 'block');
})
$('.h_mark').mouseleave(function(){
    $('.h_left').css('background','');
    $('.h_mark').css('display' , 'none');
})
//英文变中文
$('.h_mark ul li a').each(function(i,value){
    $(value).mouseenter(function(){
        $('.en' + (i + 1)).css('display' , 'none');
        $('.ch' + (i + 1)).css('display' , 'block');
    })
})
$('.h_mark ul li a').each(function(i,value){
    $(value).mouseleave(function(){
        $('.en' + (i + 1)).css('display' , 'block');
        $('.ch' + (i + 1)).css('display' , 'none');
    })
})

//关注有货
$('.h_right ul .follow').mouseenter(function(){
    $( this).css('background','#dcdcdc');
    $('.fol_mark').css('display','block');
})
$('.h_right ul .follow').mouseleave(function(){
    $( this).css('background','');
    $('.fol_mark').css('display','none');
})
//客户服务
$('.h_right ul .service').mouseenter(function(){
    $(this).css('background','#dcdcdc');
    $('.ser_mark p').css('display','block');
})
$('.h_right ul .service').mouseleave(function(){
    $(this).css('background','');
    $('.ser_mark p').css('display','none');
})
//手机版
$('.h_right ul .phone').mouseenter(function(){
    $( this).css('background','#dcdcdc');
    $('.pho_mark').css('display','block');
})
$('.h_right ul .phone').mouseleave(function(){
    $( this).css('background','');
    $('.pho_mark').css('display','none');
})

//购物车
$('.input .icon-gouwuche').hover(
    function(){
        $('.gwc_mark').css('display','block');
    },
    function(){
        $('.gwc_mark').css('display','none');
    }
)
$('.gwc_mark').hover(
    function(){
        $('.gwc_mark').css('display','block');
    },
    function(){
        $('.gwc_mark').css('display','none');
    }
)
//二级导航
$('.li_mark').each(function(i,value){
    $(value).hover(
        function(){
            $('.nav_mark_box').css('display','block');
            $('.nav_mark').css('display','block');
            $('.nav_mark_box').hover(
                function(){
                    $(this).css('display','block');
                },
                function(){
                    $(this).css('display','none');
                }
            )
            $('.nav_mark').hover(
                function(){
                    $(this).css('display','block');
                    $('.nav_mark .nav_mark_ul li a p').each(function(){
                        $(this).hover(
                            function(){
                                $(this).css('text-decoration','underline')
                            },
                            function(){
                                $(this).css('text-decoration','none')
                            }
                        )
                    });
                },
                function(){
                    $(this).css('display','none');
                    $('.nav_mark_box').css('display','none');
                }
            )
        },
        function(){
            $('.nav_mark_box').css('display','none');
            $('.nav_mark').css('display','none');
        }
    )
})



/* 轮播  */
function Slider(selector){
    //获取大盒子
    this.big_box = $('.slider')[0];
    // this.big_box = document.querySelector('.slider');
    console.log(this.big_box);
    //获取所有的大图
    this.big_li = $('.slider ul li');
    //计算大图的数量
    this.num = this.big_li.length;
    //记录当前下标
    this.cur_index = 0;
    //添加元素，完善页面，返回小圆点
    this.sml_li = this.addEle();
    // console.log(this.sml_li);
    //获取左按钮
    // let lBtn = $('#lBtn');
    this.lBtn = document.querySelector('#lBtn');
    //获取右按钮
    // this.rBtn = $('#rBtn');
    this.rBtn = document.querySelector('#rBtn');
    //添加事件
    this.addEve();
    //轮播
    this.slider();
}
//添加元素
Slider.prototype.addEle = function(){
    //左按钮
    let lBtn = this.creEle('span');
    //添加类名
    lBtn.className = 'btnSpan';
    //添加id
    lBtn.id = 'lBtn';
    //添加内容
    lBtn.innerHTML = '&lt';
    //添加到页面
    this.big_box.appendChild(lBtn);
    //右按钮
    let rBtn = this.creEle('span');
    //添加类名
    rBtn.className = 'btnSpan';
    //添加id
    rBtn.id = 'rBtn';
    //添加内容
    rBtn.innerHTML = '&gt';
    //添加到页面
    this.big_box.appendChild(rBtn);
    //添加小圆点
    let sml_ol = this.creEle('ul');
    sml_ol.id = 'sml_ol';
    let arr = [];
    for(let i = 0;i < this.num;i ++){
        let sml_li = this.creEle('li');
        sml_li.id = 'sml_li';
        sml_ol.appendChild(sml_li);
        arr.push(sml_li);
    }
    this.big_box.appendChild(sml_ol);
    return arr;
}
//添加事件
Slider.prototype.addEve = function(){
    console.log(this.lBtn);
    //左按钮的点击事件
    this.lBtn.onclick = function(){
        this.cur_index --;
        if(this.cur_index < 0){
            this.cur_index = this.num - 1;
        }
        this.slider();
    }.bind(this);

    //右按钮的点击事件
    this.rBtn.onclick = function(){
        this.cur_index ++;
        if(this.cur_index === this.num){
            this.cur_index = 0;
        }
        this.slider();
    }.bind(this);

    //小圆点的移入事件
    for(let i = 0;i < this.num;i ++){
        this.sml_li[i].onmouseenter = function(){
            this.cur_index = i;
            this.slider();
        }.bind(this);
    }
}
//轮播
Slider.prototype.slider = function(){
    for(let i = 0;i < this.num;i ++){
        this.big_li[i].style.display = 'none';
        this.sml_li[i].style.background = 'grey';
    }
    this.big_li[this.cur_index].style.display = 'block';
    this.sml_li[this.cur_index].style.background = 'white';
}
//封装创建元素的函数
Slider.prototype.creEle = function(selector){
    return document.createElement(selector);
}
new Slider();

//轮播2
$(function() {
    $('#carousel ul').carouFredSel({

        prev: '#prev',

        next: '#next',

        pagination: "#pager",

        scroll: 1000

    });
});
//左右按钮
$('#carousel ul li').hover(
    function(){
        $(this).css('opacity','0.8')
    },
    function(){
        $(this).css('opacity','1')
    }
)

// 单行文本自动滚动
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-43px"
    }, 500, function() {
        $(this).css({
            marginTop: "-18px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#s1")', 3000);
});
