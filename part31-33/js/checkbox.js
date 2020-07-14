//获取checkbox的DOM父元素selectWrapper 
var selectWrapper = document.querySelector("#select-wrapper");
//
//通过监听selectWrapper的onclick事件来完成checkbox的监听
selectWrapper.addEventListener("click", function (e) {
    //判断时间Dom节点是不是input
    console.log(e.target.nodeName);
    if (e.target.nodeName == "INPUT") {
        //改变状态
        changeState(e.target);
        //阻止冒泡
        e.target.stopPropagation;
    } else {
        e.target.stopPropagation;
    }
    //获取最新的检索数据
    let selectDateArr = getSelect();
    
    
    //制作表格
    createTable(selectDateArr);
})

function changeState(inputNode) {
    // 所有的多选按钮的逻辑分为两种
    // 1. 全选
    //    - 全选将所有子元素设为选中

    // 2. 其它
    //    - 检查自身的状态
    //    - 被选中
    //      -- 判断是否存在未被选中的其它元素
    //      -- false
    //         --- 全选按钮设为选中
    //    - 未选中
    //      -- 判断是否存在被选中的其它元素
    //      -- false
    //         --- 将自己设为选中
    //      -- true
    //         --- 将全选设为未选中
    // 获取兄弟元素 
    let inputBros = inputNode.parentNode.children;
   
  
    if (inputNode.value == "全选") {
        if (inputNode.checked) {
            // console.log(inputNode.value,inputNode.checked)
            for (i =0;i<inputBros.length;i++) {
                inputBros[i].checked = true;
            }
        } else {
            inputNode.checked = true;

        }
    } else {
        // 设置一个flag 用于判断是否唯一
        // 假设唯一
        let flag = true;
        
        if (inputNode.checked) {
            // 判断是否存在未被选中的其它元素
            for (i =0;i<inputBros.length;i++) {
                if (inputBros[i].checked == false && inputBros[i].value != "全选") {
                    //存在=不唯一
                    flag = false;
                }
            }
            (flag) ? inputNode.checked = true : inputBros[0].checked = false;
        } else {
            // 判断是否存在被选中的其它元素
            for (i =0;i<inputBros.length;i++) {
                // console.log(inputBros[x].value+".checked are :"+inputBros[x].checked);
                // console.log(inputBros[i]);
                if (inputBros[i].checked == true && inputBros[i].value != "全选" && inputBros[i] != inputNode) {
                    //存在被选中
                    // console.log(inputBros[x].value+".checked are :"+inputBros[x].checked+"..so flag=false");
                    flag = false;
                }
            }
           (flag) ? inputNode.checked = true : inputBros[0].checked = false;
        }
        // console.log(flag)
        //console.log(inputNode.value+".checked Should be :"+flag);
    }
}
