var datas = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];

draw(datas);
function draw(arr){
    var canvas =document.querySelector("#canvas-wrapper");
    
    
    let sourceMax =Math.max(...arr);
    let Height = function (x) {
        return Math.floor(200* x / sourceMax);
    }
    var ctx =canvas.getContext("2d");
    var line =new Path2D();
    
    line.moveTo(25,25);
    line.lineTo(25,225);
    line.lineTo(425,225);
    
    pointX=400/(arr.length+1);
    
    line.moveTo(25,225);
    // ctx.lineTo(250,198);
    // ctx.stroke();
    for (x in arr){
        i=Number(x)+1;
        console.log(i);
        if (Number(x)==0){
            line.moveTo(25+pointX*i,250-Height(arr[x]));
           
        }else{
            line.lineTo(25+pointX*i,250-Height(arr[x]));
            
        }
        var circle=new Path2D();
        circle.arc(25+pointX*i,250-Height(arr[x]),3,0,Math.PI*2);
        // ctx.lineTo(50+(400/arr.length-5)*i,250-Height(arr[x]));
        // ctx.stroke();
        
        ctx.fill(circle);
    }
    ctx.stroke(line);

}
