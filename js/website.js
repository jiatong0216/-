$(function () {
// 导航固定

$(window).scroll(function(){
    if($(this).scrollTop()>$('.nav-top').height()){
        $('.nav-bot').addClass('fixed');
        $('.slider').css('marginTop',$('.nav-bot').height());
    }else{
        $('.nav-bot').removeClass('fixed');
        $('.slider').css('marginTop',0);
    }
});
// 
// 导航成功案例显示 隐藏
var $success = $('#success');
$success.mouseenter(function(){
    $('.success').stop().slideDown(600);
});
$success.mouseleave(function(){
    $('.success').stop().slideUp(600);
});

// - ---轮播图 -----

    
    //获取元素
    var $lis = $('.slider>ul>li');
    var count = 0;
    // 设置右按钮点击操作
    $('.arrow-right').click(function () {
        if (count === $lis.length) {
            count = -1;
        }
        count++;
        $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    // 左按钮点击操作
    $('.arrow-left').click(function () {
        if (count === 0) {
            count = $lis.length;
        }
        count--;
        $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });

// 自动播放
// var $slider = $('.slider');
var time = setInterval(function(){
    $('.arrow-right').click();
  },3000);

$('.slider').mouseover(function(){
    clearInterval(time);
});
$('.slider').mouseout(function(){
    time = setInterval(function(){
        $('.arrow-right').click();
      },3000);
});

/* $slider.everyTime('3s', 'time', function(){
    $('.arrow-right').stop().click();
}); */

// 产品列表
var $pro1 = $('#pro1');
var $pro2 = $('#pro2');
$pro1.click(function(){
    $(this).siblings('ul').stop().slideDown(600);
});
$pro2.click(function(){
    $(this).siblings('ul').stop().slideDown(600);
});
$('.product-right').mouseleave(function(){
    $(this).children('ul').stop().hide();
});


//尾部下
var $wei1 = $('#wei1');
var $wei2 = $('#wei2');
var $wei3 = $('#wei3');
var $wei4 = $('#wei4');
$wei1.mouseenter(function(){
    $wei2.stop().show();
});
$wei1.mouseleave(function(){
    $wei2.stop().hide();
});
$wei3.mouseenter(function(){
    $wei4.stop().show();
});
$wei3.mouseleave(function(){
    $wei4.stop().hide();
});

// 右侧返回顶部 
$(window).scroll(function(){
    if ($(window).scrollTop()>500){
        $(".side").fadeIn(500);
    }else{
        $(".side").fadeOut(500);
}
});
$('#side').click(function(){
    $('body,html').stop().animate({
        scrollTop : 0
    },500);
});

$('#wx').mouseenter(function(){
    $('.wx-box').stop().show();
});
$('#wx').mouseleave(function(){
    $('.wx-box').stop().hide();
});
$('#tel').mouseenter(function(){
    $('.tel-box').stop().show();
});
$('#tel').mouseleave(function(){
    $('.tel-box').stop().hide();
});


// 左侧窗口动画
var $btn1 = $('#btn1');
var $btn2 = $('#btn2');
var $sideb = $('.side-bot')
$btn1.click(function(){
    $sideb.animate({
        height: 0,
    },600,function(){
        $btn2.show().stop().siblings('#btn1').hide();
    })
});
$btn2.click(function(){
    $sideb.animate({
        height: 330,
    },600,function(){
        $btn2.hide().stop().siblings('#btn1').show();
    })
});
var timeId = setTimeout(function(){
    $('.left-side').fadeIn(800)
},4000);

$('.left-side').mouseleave(function(){
    clearTimeout(timeId);
});
});