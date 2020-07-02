# 笔记
## day20-21目标
- 掌握**事件**概念
- 操作DOM的样式


## 修改样式
- ```obj.style.attr=value;```
- ```obj.style.cssText="attr:value;attr1:value;attr2:value;"```
- ```obj.style.setAttribute("attr","value");``` 
**可用第三种实现改变类名适应新style，或直接更改CSS文件指向**

## 时间
- ```name = setTimeout(function(),millisecond)```
- ```clearTimeout(name)```
- ```name = setInterval(function(),millisec[,"lang"])```
- ```clearInterval(name)```


## 坑记录
- 尽量不要使用和标签名一样的变量名储存标签对象。
- ```task1.html```中 回车提交的任务可以直接通过onchange事件完成
- 如果针对哪个按键进行事件响应，需要使用```onkeydown()```
- [keyCode表格](https://www.cnblogs.com/cnblogs-jcy/p/6409672.html)
- [事件列表](https://www.w3school.com.cn/jsref/dom_obj_event.asp)
- ```task4```文件中踩到的坑，```opacity```属性值是字符型。 只能怪自己没有仔细看文档。哎



