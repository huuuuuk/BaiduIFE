# 笔记

## 1.键盘事件


- ```onkeyup```
    - 松开任何键都有响应
- ```onkeypress```
    - 对按键有反应 对```Backspace```无响应
- ```oninput```
    - 当按键使得输入框内**内容发生变化时**响应
- ```onkeydown```
    - 按下任何键都有响应
## 2.事件委托

- 同父元素
- 同事件
- 同执行逻辑

可以将事件监听放到父元素上，利用的是事件冒泡。
测试文件```test01.html```

## 3.清空元素

- document.getElementById("div").innerHTML="";

## 3.坑

- 在输入框输入```<b>```，输出正常：）
    - 头一次想让它出现报错/捂脸
    - 并不是我解决了问题，而是课程想让我注意到 **"这种问题可能出现在哪一步"** <br>，而我现在不知道了。。。

- 在我思路里task01中就是根据输入生成输入建议,然后每输入一次就先清空一次```ul```然后重新生成```li```
- 一定要注意```onkeyup```、```onkeypress```、```oninput```、```onkeydown```的响应顺序。
- 在```keyup```中生成的对象，在```keydown```就有可能无法使用。