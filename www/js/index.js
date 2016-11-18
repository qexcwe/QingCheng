/**
 * Created by Caoy on 2016/11/12.
 */

var app = angular.module('qingCheng', []);

//轮播图
app.controller('carousel', [function ($scope) {

    
    $(document).ready(function () {

        var num = $('.carousel-span span').length;
        var i_mun = 0;
        var timer_banner = null;

        $('.carousel-ul li:gt(0)').hide(); //页面加载隐藏所有的li 除了第一个

        //底下小图标点击切换
        $('.carousel-span span').click(function () {
            $(this).addClass('carousel-span_one')
                .siblings('span').removeClass('carousel-span_one');
            var i_mun1 = $('.carousel-span span').index(this);
            $('.carousel-ul li').eq(i_mun1).fadeIn('slow')
                .siblings('li').fadeOut('slow');

            i_mun = i_mun1;
        });
        //自动播放函数
        function bannerMoveks() {
            timer_banner = setInterval(function () {
                move_banner()
            }, 4000)
        };
        bannerMoveks(); //开始自动播放

        //鼠标移动到banner上时停止播放
        $('.carousel-box').mouseover(function () {
            clearInterval(timer_banner) 
        });

        //鼠标离开 banner 开启定时播放
        $('.carousel-box').mouseout(function () {
            bannerMoveks();
        });

        //banner 右边点击执行函数
        function move_banner() {
            if (i_mun == num - 1) {
                i_mun = -1
            }
            //大图切换
            $('.carousel-ul li').eq(i_mun + 1).fadeIn('slow')
                .siblings('li').fadeOut('slow');
            //小图切换
            $('.carousel-span span').eq(i_mun + 1).addClass('carousel-span_one')
                .siblings('span').removeClass('carousel-span_one');
            i_mun++
        }

    })
}]);

//nav
app.controller('menuList', ["$scope", function ($scope) {

    $('.menu li:first a').addClass('addColor');
    
    $('.menu li a').mouseover(function () {
        $(this).addClass("addColor");
        $(this).parent('li').siblings("li").children("a").removeClass("addColor");
    });
    $('.menu li a').mouseleave(function () {
        $(this).parent('li').siblings("li:first").children("a").addClass("addColor");
        $(this).removeClass("addColor");
    });


    //dn-list1
    $("#dn-list1_hover").mouseover(function () {
        $(".dn-list1").css("display","block");
    });
    $("#dn-list1_hover").parent('li').mouseleave(function () {
        $(".dn-list1").css("display","none");
    });
    $(".dn-list1").mouseover(function () {
        $(".dn-list1").css("display","block");
    });
    $(".dn-list1").mouseleave(function () {
        $(".dn-list1").css("display","none");
    });
    //img更换src
    $(".dn-list1 .left img").mouseover(function () {
        $(".dn-list1 .left img").attr('src','img/top-png/brand10.png');
    });
    $(".dn-list1 .left img").mouseleave(function () {
        $(".dn-list1 .left img").attr('src','img/top-png/brand1.png');
    });
    $(".dn-list1 .center img").mouseover(function () {
        $(".dn-list1 .center img").attr('src','img/top-png/brand20.png');
    });
    $(".dn-list1 .center img").mouseleave(function () {
        $(".dn-list1 .center img").attr('src','img/top-png/brand2.png');
    });
    $(".dn-list1 .right img").mouseover(function () {
        $(".dn-list1 .right img").attr('src','img/top-png/brand30.png');
    });
    $(".dn-list1 .right img").mouseleave(function () {
        $(".dn-list1 .right img").attr('src','img/top-png/brand3.png');
    });
    //dn-list2
    $("#dn-list2_hover").mouseover(function () {
        $(".dn-list2").css("display","block");
    });
    $("#dn-list2_hover").parent('li').mouseleave(function () {
        $(".dn-list2").css("display","none");
    });
    $(".dn-list2").mouseover(function () {
        $(".dn-list2").css("display","block");
    });
    $(".dn-list2").mouseleave(function () {
        $(".dn-list2").css("display","none");
    });
    //img更换src
    $(".dn-list2 .left img").eq(0).mouseover(function () {
        $(".dn-list2 .left img").eq(0).attr('src','img/top-png/product20.png');
    });
    $(".dn-list2 .left img").eq(0).mouseleave(function () {
        $(".dn-list2 .left img").eq(0).attr('src','img/top-png/product2.png');
    });
    $(".dn-list2 .left img").eq(1).mouseover(function () {
        $(".dn-list2 .left img").eq(1).attr('src','img/top-png/product30.png');
    });
    $(".dn-list2 .left img").eq(1).mouseleave(function () {
        $(".dn-list2 .left img").eq(1).attr('src','img/top-png/product3.png');
    });
    $(".dn-list2 .left img").eq(2).mouseover(function () {
        $(".dn-list2 .left img").eq(2).attr('src','img/top-png/product_n200.png');
    });
    $(".dn-list2 .left img").eq(2).mouseleave(function () {
        $(".dn-list2 .left img").eq(2).attr('src','img/top-png/product_n20.png');
    });

    $(".dn-list2 .center img").mouseover(function () {
        $(".dn-list2 .center img").attr('src','img/top-png/product_m40.png');
    });
    $(".dn-list2 .center img").mouseleave(function () {
        $(".dn-list2 .center img").attr('src','img/top-png/product_m4.png');
    });

    $(".dn-list2 .right img").eq(0).mouseover(function () {
        $(".dn-list2 .right img").eq(0).attr('src','img/top-png/product_t20.png');
    });
    $(".dn-list2 .right img").eq(0).mouseleave(function () {
        $(".dn-list2 .right img").eq(0).attr('src','img/top-png/product_t2.png');
    });
    $(".dn-list2 .right img").eq(1).mouseover(function () {
        $(".dn-list2 .right img").eq(1).attr('src','img/top-png/product_t30.png');
    });
    $(".dn-list2 .right img").eq(1).mouseleave(function () {
        $(".dn-list2 .right img").eq(1).attr('src','img/top-png/product_t3.png');
    });
    $(".dn-list2 .right img").eq(2).mouseover(function () {
        $(".dn-list2 .right img").eq(2).attr('src','img/top-png/product50.png');
    });
    $(".dn-list2 .right img").eq(2).mouseleave(function () {
        $(".dn-list2 .right img").eq(2).attr('src','img/top-png/product5.png');
    });





}]);

//热门配件
app.controller('fitting', ["$scope", function ($scope) {
    $(".fitting_detail img").css('box-shadow', '0 0 15px #999')
}]);


