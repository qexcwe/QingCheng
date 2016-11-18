/**
 * Created by Caoy on 2016/11/14.
 */
var app = angular.module('qingChengN2', []);

//nav
app.controller('menuList', ["$scope", function ($scope) {

    $(".menu li:nth-of-type(5) a").addClass("addColor");

    $('.menu li a').mouseover(function () {
        $(this).addClass("addColor");
        $(this).parent('li').siblings("li").children("a").removeClass("addColor");
    });
    $('.menu li a').mouseleave(function () {
        $(this).parent('li').siblings("li:nth-of-type(5)").children("a").addClass("addColor");
        $(this).removeClass("addColor");
    })


    //dn-list1
    $("#dn-list1_hover").mouseover(function () {
        $(".dn-list1").css("display", "block");
    });
    $("#dn-list1_hover").parent('li').mouseleave(function () {
        $(".dn-list1").css("display", "none");
    });
    $(".dn-list1").mouseover(function () {
        $(".dn-list1").css("display", "block");
    });
    $(".dn-list1").mouseleave(function () {
        $(".dn-list1").css("display", "none");
    });
    //img更换src
    $(".dn-list1 .left img").mouseover(function () {
        $(".dn-list1 .left img").attr('src', 'img/top-png/brand10.png');
    });
    $(".dn-list1 .left img").mouseleave(function () {
        $(".dn-list1 .left img").attr('src', 'img/top-png/brand1.png');
    });
    $(".dn-list1 .center img").mouseover(function () {
        $(".dn-list1 .center img").attr('src', 'img/top-png/brand20.png');
    });
    $(".dn-list1 .center img").mouseleave(function () {
        $(".dn-list1 .center img").attr('src', 'img/top-png/brand2.png');
    });
    $(".dn-list1 .right img").mouseover(function () {
        $(".dn-list1 .right img").attr('src', 'img/top-png/brand30.png');
    });
    $(".dn-list1 .right img").mouseleave(function () {
        $(".dn-list1 .right img").attr('src', 'img/top-png/brand3.png');
    });
    //dn-list2
    $("#dn-list2_hover").mouseover(function () {
        $(".dn-list2").css("display", "block");
    });
    $("#dn-list2_hover").parent('li').mouseleave(function () {
        $(".dn-list2").css("display", "none");
    });
    $(".dn-list2").mouseover(function () {
        $(".dn-list2").css("display", "block");
    });
    $(".dn-list2").mouseleave(function () {
        $(".dn-list2").css("display", "none");
    });
    //img更换src
    $(".dn-list2 .left img").eq(0).mouseover(function () {
        $(".dn-list2 .left img").eq(0).attr('src', 'img/top-png/product20.png');
    });
    $(".dn-list2 .left img").eq(0).mouseleave(function () {
        $(".dn-list2 .left img").eq(0).attr('src', 'img/top-png/product2.png');
    });
    $(".dn-list2 .left img").eq(1).mouseover(function () {
        $(".dn-list2 .left img").eq(1).attr('src', 'img/top-png/product30.png');
    });
    $(".dn-list2 .left img").eq(1).mouseleave(function () {
        $(".dn-list2 .left img").eq(1).attr('src', 'img/top-png/product3.png');
    });
    $(".dn-list2 .left img").eq(2).mouseover(function () {
        $(".dn-list2 .left img").eq(2).attr('src', 'img/top-png/product_n200.png');
    });
    $(".dn-list2 .left img").eq(2).mouseleave(function () {
        $(".dn-list2 .left img").eq(2).attr('src', 'img/top-png/product_n20.png');
    });

    $(".dn-list2 .center img").mouseover(function () {
        $(".dn-list2 .center img").attr('src', 'img/top-png/product_m40.png');
    });
    $(".dn-list2 .center img").mouseleave(function () {
        $(".dn-list2 .center img").attr('src', 'img/top-png/product_m4.png');
    });

    $(".dn-list2 .right img").eq(0).mouseover(function () {
        $(".dn-list2 .right img").eq(0).attr('src', 'img/top-png/product_t20.png');
    });
    $(".dn-list2 .right img").eq(0).mouseleave(function () {
        $(".dn-list2 .right img").eq(0).attr('src', 'img/top-png/product_t2.png');
    });
    $(".dn-list2 .right img").eq(1).mouseover(function () {
        $(".dn-list2 .right img").eq(1).attr('src', 'img/top-png/product_t30.png');
    });
    $(".dn-list2 .right img").eq(1).mouseleave(function () {
        $(".dn-list2 .right img").eq(1).attr('src', 'img/top-png/product_t3.png');
    });
    $(".dn-list2 .right img").eq(2).mouseover(function () {
        $(".dn-list2 .right img").eq(2).attr('src', 'img/top-png/product50.png');
    });
    $(".dn-list2 .right img").eq(2).mouseleave(function () {
        $(".dn-list2 .right img").eq(2).attr('src', 'img/top-png/product5.png');
    });


}]);

app.controller('product',['$scope',function (s) {
    s.price = 699;
    s.saleNumber = 2296;
    s.allEvaluate = 403;

    //购买商品数量处
    var num = $(".product_detail .sale-num").val()*1;
    s.reduceNum = function () {
        if(num > 1){
            $(".product_detail .sale-num").val(--num);
        }else{
            return;
        }
    };
    s.addNum = function () {
        if(num<5){
            $(".product_detail .sale-num").val(++num);
        }else {
            alert('您最多只能购买5件！！')
        }

    };
    //选择颜色处
    s.changeToG = function () {
        $(".product_detail .left .middle_photo img").attr('src','img/s/1.jpg');
        $(".product_detail .right .changeG").children('img').css('border','1px solid #ED6C00')
            .css('border-radius','5px');
        $(".product_detail .right .changeS").children('img').css('border','none');
    };
    s.changeToS = function () {
        $(".product_detail .left .middle_photo img").attr('src','img/s/2.jpg');
        $(".product_detail .right .changeS").children('img').css('border','1px solid #ED6C00')
            .css('border-radius','5px');
        $(".product_detail .right .changeG").children('img').css('border','none');
    };

    //放大镜下方的list移动
    
    var currentN=0;
    s.moveR = function () {
        currentN++;
        if(currentN <= 4){
            $(".product_detail .left .list_photo_center ul")
                .css('left',-93*(currentN)+'px');
        }else {
            currentN = 4;
        }
        console.log(currentN)

    };
    s.moveL = function () {
        --currentN;
        if(currentN>=0){
            $(".product_detail .left .list_photo_center ul")
                .css('left',-93*(currentN)+'px');
        }else {
            currentN = 0;
        }
        console.log(currentN);

    }
    
}]);

//页面放大镜执行
CloudZoom.quickStart();
//金币过滤器
app.filter("RMBfilter", [function () {
    return function (value, prefix) {
        //过滤器函数中第一个参数是原始数据，
        //从第二个参数开始是过滤器调用时传递的参数。
        if (value) {

            var temp = value.toFixed(0);
            var dotIndex = temp.indexOf(".");
            while (dotIndex > 4) {
                dotIndex -= 4;
                temp = temp.substring(0, dotIndex) + ',' + temp
                        .substring(dotIndex);
            }

            return (prefix || "￥") + temp;
        } else {
            return "0.00";
        }
    };
}]);

//下方tabs
jQuery(document).ready(function ($) {

    $('.tabset2').pwstabs({
        effect: 'slideleft',
        defaultTab: 1,
        containerWidth: '1190px'

    });

});

//tabs中图集滚动处初始化
$(".A_Demo").PicCarousel("init");