## SVG
### 1. svg例子
```
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle cx="100" cy="50" r="40" stroke="black"
stroke-width="2" fill="red"/>

</svg>
```
- ```svg```标签```<svg version="1.1" xmlns="http://www.w3.org/2000/svg">...</svg>```
- ```version```指向版本
- ```xmlns```指向命名空间
- 嵌入```svg```推荐直接在html中嵌入，Chrome/safari均支持。
### 2. 默认基本图形
- ```<rect>```矩形
    - ```<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>```
    - ```fill```填充颜色
    - ```stroke:rgb(0,0,0)```边框颜色
    - ```stroke-with```宽度
    - ```fill-opacity / stroke-opacity /opacity```填充/边框/元素透明度
    - ```rx,ry```圆角
- ```<circle>```圆形
    - ```<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>```
    - ```cx,cy```圆心坐标
    - ```r```半径
- ```<ellipse>```椭圆
    - ```<ellipse cx="300" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2"/>```
    - ```rx,ry```x,y半径
- ```<line>```线
    - ```x1,y1```起始点
    - ```x2,y2```结束点
- ```<polyline>```折线
    - ```points```路径点
- ```<polygon>```多边形
    - ```points```路径点，尾部自动返回起点
- ```<path>```路径
    - ```path```标签提供了画任意图形的能力
    - ```path```path能力十分强大，下面为path单开一节
### 3. path路径

1. 首先，我们看一个例子。
```javascript
<svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M 10 10"/>
</svg>
```
可以看到，path标签有一个d属性
```javascript
<path d="M 10 10"/>
```
d的值中M代表Move，该路径的画笔起点将移动到距离```left=10,top=10```的位置。 M不作画，所以没有产生任何图形。

2. L 、H 、V 、Z 命令
同样也是一个例子
```javascript
//下面是三个个相同的图像
<path d="M 10 10 H 90 V 90 H 10 L 10 10"/>
<path d="M 10 10 H 90 V 90 H 10 Z"/>
<path d="M 10 10 h 80 v 80 H -80 Z"/>
```
- M 10 10 => 起点移动到10，10
- H 90    => 10，10向90，10画一条**水平线**
- V 90    => 90，10向90，90画一条**垂直线**
- H 10    => 90，90向10，90画一条水平线
- L 10 10 => 10，90向10，10画一条**直线**
- **当H、V使用小写字母h、v时，值将变为相对坐标**
- 好了现在告诉我这是一个什么图
- 可以注意到在第二个path中，我们用Z替换了最后的L 10 10.
- Z是闭合命令，由当前点向起点做一条直线闭合图形
3. 贝塞尔曲线C、S、Q、T
我们先看例子
```javascript
<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
<path d="M10 10 C 20 20, 40 20, 50 10 S 150 150, 180 80" stroke="black" fill="transparent"/>
<path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
<path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
```
- C x1 y1, x2 y2, x y
    - x1,y1是第一个控制点的坐标
    - x2,y2是第二个控制点的坐标
    - x,y 是图形终点的坐标
- C x1 y1, x2 y2, x y S x2 y2, x y
    - S 的 x1 y1第一个控制点是取决于上一个C或S的第二个控制点和终点。
    - 如果S之前没有C 或S，则等价于C
- Q x1 y1, x y
    - Q的两个控制点合为一个。
- Q x1 y1, x y T x2 y2, x y
    - T对于Q 等价于 S对于C
4. 弧形
```javascript
<path d="M10 315 A 30 50 0 0 1 162.55 162.45"stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
```
- A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    - rx ry 半径
    - x-axis-rotation 倾斜角度
    - large-arc-flag  0/1 0小于180 1大于180
    - sweep-flag 0/1 逆时针/顺时针

- 不能用弧画⚪
5. 文字
```javascript
<text x="10" y="10" >Hello World!</text>
```
### 4.stroke 属性
- ```stroke-linecap```
    - butt 直接结束
    - square 包裹
    - round 圆角包裹
- ```stroke-linejoin```
    - miter 直接连接
    - round 圆角包裹
    - bevel 斜接
- ```stroke-dasharray```
    - 虚线类型