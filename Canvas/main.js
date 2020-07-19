//找到canvasDOM元素
var canvas =document.getElementById("tutorial");
//创建2D画布
//通过检测canvas.getContext()浏览器是否支持canvas
if (canvas.getContext){
    // 支持
    var ctx = canvas.getContext("2d");
    //创建矩形
    ctx.fillStyle ="rgb(200,0,0)";
    ctx.fillRect(10,10,55,50);
    //创建有透明度的矩形
    ctx.fillStyle ="rgb(0,0,200,0.5)";
    ctx.fillRect(30,30,55,50);
    //创建三角形一
    ctx.beginPath();
    ctx.moveTo(90,0);
    ctx.lineTo(90,75);
    ctx.lineTo(150,75);
    //通过填充自动闭合
    ctx.fill();

    //创建三角形二
    ctx.beginPath();
    ctx.moveTo(90,77);
    ctx.lineTo(150,77);
    ctx.lineTo(90,150);
    //手动闭合
    ctx.closePath();
    //加边
    ctx.stroke();

    //弧形 =用于画圆
    ctx.beginPath();
    ctx.arc(60,210,50,0,2*Math.PI)
    ctx.stroke();

    //二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(160,75);
    ctx.quadraticCurveTo(205,15,250,75);
    ctx.stroke();

    //三次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(260,75);
    ctx.bezierCurveTo(250,0,310,0,300,75);
    ctx.stroke();


}else{
    alert("该浏览器不支持canvas标签");
}
