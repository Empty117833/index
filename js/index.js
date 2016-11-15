/**
 * Created by Administrator on 2016/9/1.
 */
$(function () {

    // 获取屏幕的高宽�
    var pageWidth = $(window).width() +17;
    var pageHeight = $(window).height();
    console.log(pageWidth)
    console.log(pageHeight)
    $("#allBox").css({
        "width": pageWidth,
        "height": pageHeight,
        "overflow": "hidden"
    })
    //点击导航切换页面�
    var index = 0;
    $("#menu>li").click(function () {
        index = $(this).index();
        var top = -pageHeight * index;
        $(".eachBox").animate({
            "top": top + "px"
        }, 700)
        $("#circle>li:eq(" + index + ")")
            .addClass("currentCircle")
            .siblings().removeClass("currentCircle");
        //切换导航下边下划线��
        $("#menu span:eq(" + index + ")").animate({
            "width": "100%"
        }).parent().siblings().children().animate({
            "width": 0
        });
    });

    //点击圆圈进行切换页面
    $("#circle>li").click(function () {
        var index = $(this).index();
        var top = -pageHeight * index;
        console.log(top)
        $(".eachBox").animate({
            "top": top + "px"
        }, 700)

        $("#circle>li:eq(" + index + ")")
            .addClass("currentCircle")
            .siblings().removeClass("currentCircle");
        //切换导航下边的下划线
        $("#menu span:eq(" + index + ")").animate({
            "width": "100%"
        }).parent().siblings().children().animate({
            "width": 0
        });
    })
    //设置每一个盒子的宽度�
    $(".box0").height(pageHeight-110);
    console.log($(".box0").height());
    $(".box1").height(pageHeight - 120);
    $(".box2").height(pageHeight - 150);
    $(".box3").height(pageHeight - 150);
    $(".box4").height(pageHeight - 150);
    $(".box5").height(pageHeight - 100);
    $(".box6").height(pageHeight - 150);
    $(".box7").height(pageHeight - 150);
    $(".box8").height(pageHeight - 150);

    //logo  翻转
    function logo() {
        var date = new Date();
        var ms = date.getMilliseconds();
        var s = date.getSeconds() + ms / 1000;
        $(".logo-w>img").css("transform", "rotateY(" + s * 80 + "deg)")
        $(".logo-b>img").css("transform", "rotateY(" + s * 80 + "deg)")
    }
    setInterval(logo, 1);
    //实现滑动整屏滑动效果
    /*window.onload = function(){
        var count = 0;
        document.onmousewheel = function(e){
           //实现往下滚动++往上--
            if(e.wheelDelta < 0){
                count ++;
                var top = -pageHeight * count;
                if(count>-1&&count<9){
                    $(".eachBox").animate({
                        "top": top + "px"
                    }, 1000);
                    $("#circle>li:eq(" + count + ")")
                        .addClass("currentCircle")
                        .siblings().removeClass("currentCircle");
                }else{
                    count=8
                }
            }else{
                count --;
                var top = -pageHeight * count;
                if(count>-1&&count<9){
                    $(".eachBox").animate({
                        "top": top + "px"
                    }, 1000);
                    $("#circle>li:eq(" + count + ")")
                        .addClass("currentCircle")
                        .siblings().removeClass("currentCircle");
                }else{
                    count=0;
                }
            }
            console.log(count);
        }
    }*/
    //设置第一张图片淡入淡出效果
    $(function(){
        $(window).load(function(){
            $("#twoPic").mouseenter(function(){
                $(this).fadeOut(1000)
            })
            $("#firstPic").mouseleave(function(){
                $("#twoPic").fadeIn(1000)
            })
        })
    })

    //设置第二屏文字块下拉效果
    $(function(){
        $(".first_left ").mouseenter(function(){
            $(this).stop(false,true).slideUp(3000);
        })
        $(".first_left ").mouseleave(function(){
            $(this).stop(false,true).slideDown(3000);
        })
    })

    $(function(){
  var d="<div class='snow'>❅<div>";
        //var d="<div class='snow'>❤<div>";
        var snowSpeed = 100//设置下雪的速度，越大雪花越多，下的越快
        setInterval(function(){
            var f=$(document).width();//获取屏幕宽度
            var h=$(document).height();//获取屏幕高度
            var e=Math.random()*f;//设置左侧开始点
            var o=0.3+Math.random();//设置透明度
            var fon=10+Math.random()*40;//设置雪花大小
            var l = e - 100 + 200 * Math.random();//设置风速
            var k=2000 + 10000 * Math.random();//设置下落时间
            $(d).clone().appendTo(".lrf").css({
                left:e+"px",
                opacity:o,
                "font-size":fon,
            }).animate({
                top:h+"px",
                left:l+"px",
                opacity:0.1,
            },k,"linear",function(){$(this).remove()})
        },snowSpeed)
    });


$(document).ready(function() {
        var accordion_head = $('.accordion > li > a'),
            accordion_body = $('.accordion li > .sub-menu');
        // O上来进行加载第一部分的内容
        accordion_head.first().addClass('active').next().slideDown('normal');
        // Click function
        accordion_head.on('click', function(event) {
            // 阻止默认事件发生
            event.preventDefault();
            // 点击时进行切换
            if ($(this).attr('class') != 'active'){
                accordion_body.slideUp('normal');
                $(this).next().stop(true,true).slideToggle('normal');
                accordion_head.removeClass('active');
                $(this).addClass('active');
            }
        });
    });


    $(document).ready(function() {
        $('.inbox').each(function(x) {
            $(this).children('li:first').show();
            $(this).children('li').each(function(y) {
                $(this).css('background-position', (4 - x) * 90 + 'px 0px');
            })
        });
        $('.text:first').css('color','#fff');
        $('.text').hover(function() {
            i = $('.text').index($(this));
            $('.text').css('color','#666');
            $('.text').eq(i).css('color','#fff');
            $('.inbox').each(function(x) {
                setTimeout(function(){
                    $('.inbox').eq(x).children('li').each(function(y) {
                        if (y == i) {
                            $(this).fadeIn();
                        } else {
                            $(this).hide();
                        }
                    })
                },400-x*100);
            });
        })
    })
})



