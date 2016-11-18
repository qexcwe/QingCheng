/**
 * Created by Caoy on 2016/11/12.
 */
var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var template = require("art-template");

var app = express();
app.engine('.html',template.__express);
app.set('view engine','html');

//关闭缓存
template.config('cache',false);
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static('www'));


//请求首页
app.get('/',function (req,res) {
    var data = {
        head:{
            title:"青橙官网 —— 提供青橙N2手机、青橙VOGA V1、配件等多元化、高品质智能产品的官方正品销售网站"
        }
    };
    res.render("index",data);
});

//请求mobile界面

app.get('/mobile',function (req,res) {
    res.render("mobile",{
        head:{title:"青橙N2"}
        
    });
});



//登录注册部分

app.listen(8080,function () {
    console.log('服务器开启...');
});