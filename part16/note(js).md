# JavaScript初探

- JavaScript
    - DOM 文档对象模型
    - BOM
    - ECMAScript

## 1.JavaScript

 JavaScript是一种可以对HTML页面元素进行控制的脚本语言。由DOM、BOM、ECMAScript组成

## 2.DOM 文档对象模型

DOM将html元素以树的形式进行关联

    - html
        - head
            - meta
            - title
                - 王宇宙的js笔记
            - link
        - body
            - div
                - div
            - p
                - Hello World!
```
<html>
    <head>
        <meta>
        <title>王宇宙的js笔记</title>
        <link>
    </head>
    <body>
        <div>
            <div></div>
        </div>
        <p>Hello World!</p>
    </body>
</html>
```

## 3.BOM

**没看懂 回头再说**
            
## 4. ECMAScript
    ECMAScript中确定了JavaScript的语法和规则。

### 4.1 ECMAScript语法

- 区分大小写
- 变量可变类型
- 分号可由可无（百度代码风格必须要有）
- 注释```//行注释``` ```/*块注释*/```
- 代码块```{}```用大括号包起。

### 4.2 ECMAScript变量
- 声明变量用```var```
- 无需初始化

### 4.3 变量命名
- 以字母、_（下划线）或$开头
- 驼峰标记法

### 4.4 关键字
    break
    case
    catch
    continue
    default
    delete
    do
    else
    finally
    for
    function
    if
    in
    instanceof
    new
    return
    switch
    this
    throw
    try
    typeof
    var
    void
    while
    with
### 4.5保留字
    abstract
    boolean
    byte
    char
    class
    const
    debugger
    double
    enum
    export
    extends
    final
    float
    goto
    implements
    import
    int
    interface
    long
    native
    package
    private
    protected
    public
    short
    static
    super
    synchronized
    throws
    transient
    volatile
### 4.6 ECMAScript原始值和引用值

在ECMAScript中有两种类型的值
- 原始值 （栈-stack）
- 引用值 （堆-heap） 该变量只是数据对象所在内存的地址(point)--指针

### 4.7 原始类型（Primitive type）
    
    原始类型: Undefined 、Null、Boolean、Number、String
    检查类型的函数: typeof()
- Undefined类型 
    - 只有一个值 undefined
    - 当一个变量未初始化时，默认值为undefined
    - 当**函数无明确返回值**时，类型是undefined
- Null类型
    - 只有一个值 null
- **undefined和Null的区别**
    - undefined是值已经声明但未初始化的值
    - null是尚未存在的对象
- Boolean类型
    - 布尔类型 true / false
    - 0在必要时可以转化为false
- Number类型
    - 可以表示32位的整数+64位浮点数
    - 八进制 = 0开头
    - 十六进制 = 0x开头
    - 浮点数**在进行计算前存储的是字符串**
    - ```Number.MAX_VALUE```和```Number.MIN_VALUE```所有的 Number值都必须在这之间，而**计算生成的数值**可以不在这之间
    - ```Number.POSITIVE_INFINITY```=大于```Number.MAX_VALUE```的值
    - ```Number.NEGATIVE_INFINITY```=小于```Number.M        IN_VALUE```的值
    - 默认值为```Infinity/-Infinity```
        - 判断变量是否有穷**isFinite()**
    - 类型转换失败时=NaN
        - 判断NaN```isNaN()```
- String类型

## 5. 引用类型

### 声明

- ``` var a = new Object();```
    需要用```new```实例化一个对象




### 总结
    ECMAScript从我的理解上是一种语言规则，JS是符合该规则的脚本语言。


