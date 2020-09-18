console.log("开始执行入口JS文件");
//引入文件核心模块
var fs = require('fs')
//引入http核心模块
var http = require('http');
//引入文件类型与Content-type转化模块
const format_match=require('./js/utils/format.js');
//创建服务
var server=http.createServer();
//启动监听
server.listen('8888',function(){
    console.log("http服务启动，请登录 http://localhost:8888");
});

//检测到请求时服务器的处理方法
server.on('request',function(request,response){
    console.log("请求方式："+request.method);
    console.log("请求url："+request.url);
    const url=request.url;
    if(url=='/'){
        console.log("入口html页面");
        fs.readFile("./html/login.html",function(error,data){
            if(error){
                throw error;
            }else{
                //响应html页面
                response.setHeader('Content-type','text/html;charset=utf-8');
                response.end(data);
            }
        });
    }else{
        //根据请求url获取请求文件的类型
        let type=url.split('.').pop();
        console.log("请求文件的类型："+type);
        //readFile方法不要写编码格式，容易出现解析问题
        fs.readFile('.'+url,function(error,data){
            if(error){
                throw error;
            }else{
                response.setHeader('Content-type',format_match.format[type]);
                response.end(data);
            }
        });
    }
})



