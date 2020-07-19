//获取容器
var svgWrapper = document.querySelector("#svg-wrapper");
var datas = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
var btn =document.querySelector("button");
btn.addEventListener("click",function(){
    newBar(datas);
})

//创建柱状图函数
function newBar(arr) {
    //arr是数据项
    //设置svg控件宽高

    
    let svgWidth = 500;
    let svgHeight = 500;
    //设置柱状图x\y轴长度
    let barX = 400;
    let barY = 200;
    //每一个柱形的宽度
    let barWdith = Math.floor(400 / arr.length) - 5;
    //获取arr数组中的最大值
    let sourceMax = Math.max(...arr);
    //每一个柱形的高度
    let barHeight = function (x) {
        return Math.floor(barY * x / sourceMax);
    }
    //设置柱形间隔
    let barBetween = 5;

    //创建svg
    svgline = '<svg version="1.1" baseProfile="full" width="' + svgWidth + '" height="' + svgHeight + '" xmlns="http://www.w3.org/2000/svg">'
    //创建y轴
    svgline += '<line x1 = "50" y1 = "50" x2="50" y2 ="' + (50 + barY) + '" style="stroke:black;stroke-width:1" />'
    //创建x轴
    console.log(50 + barX);
    svgline += '<line x1 = "50" y1 = "' + (50 + barY) + '" x2="' + (50 + barX) + '" y2 ="' + (50 + barY) + '" style="stroke:black;stroke-width:1" />'
    //遍历数组创建柱形

    for (i = 0; i < arr.length; i++) {
        x = String((50 + barBetween + i * (barWdith+5)));
        y = String(50+ barY - barHeight(arr[i]));
        svgline += '<rect x="' + x + '" y="' + y + '" width ="' + barWdith + '" height ="' + barHeight(arr[i]) + '" style="fill:black"/>';
        
    }
    svgline += "</svg>";
    svgWrapper.innerHTML = svgline;



}