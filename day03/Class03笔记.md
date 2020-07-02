# Class03笔记
## 什么是CSS CSS是如何工作的。
CSS是用于对HTML元素进行style渲染的语言
CSS通过对指定的元素标签、类型标签、id标签进行格式渲染。
## CSS的基本语法是怎样的。
```
tag/.class/#id{
    属性:value
}
```
## CSS选择器是什么概念，简单选择器和属性选择器是什么

用于选择指定的标签来进行格式渲染。
- 简单选择器
    - tag
    - .class
    - #id
    - ```*```

- 属性选择器
    - ```[attr]```
    - ```[attr=val]```
    - ```[attr~=val]```
- 子串属性选择器
    - ```[attr|=val]```属性值是val或是以val开头的元素
    - ```[attr^=val]```以val开头的所有元素
    - ```[attr$=val]```以val结尾的所有元素
    - ```[attr*=val]```包含val的所有元素
    
## 文本样式都有哪些相关属性，对应哪些值

- ```font-size```
- ```font-family```
- ```text-align```
- ```text-decoration```
- ```color```
- ```font-weight```

