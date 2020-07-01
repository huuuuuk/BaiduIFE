num1=document.getElementById("first-number")
 num2=document.getElementById("second-number");

try{
    

        document.getElementById("add-btn").onclick=function(){
            if (num1.value == null || num1.value == "" || num2.value == null || num2.value == ""){
                throw "输入的不是数字";
            }else if(isNaN(num1.value) || isNaN(num2.value)){
                throw "请输入"
            }else{
        
            document.getElementById("result").innerHTML= parseInt(num1.value)+ parseInt(num2.value);
            }
        }
        document.getElementById("minus-btn").onclick=function(){
            if (num1.value == null || num1.value == "" || num2.value == null || num2.value == ""){
                throw "输入的不是数字";
            }else if(isNaN(num1.value) || isNaN(num2.value)){
                throw "请输入"
            }else{
                document.getElementById("result").innerHTML=parseInt(num1.value) - parseInt(num2.value);
           
            }  

        }
        document.getElementById("times-btn").onclick=function(){
            result=parseInt(num1.value) * parseInt(num2.value)
            document.getElementById("result").innerHTML=result;
            console.log(result);
        }
        document.getElementById("divide-btn").onclick=function(){
        
                if (num1===0||num2===0){
                    throw "被除数或除数为0";
                }
            document.getElementById("result").innerHTML=parseInt(num1.value) / parseInt(num2.value);

        }
   
}
catch(err){
    console.log(err);
}