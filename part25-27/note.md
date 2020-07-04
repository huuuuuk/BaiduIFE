# 今日记录

## 今日踩坑实录
- ```===```和```==```的使用

```
undefined===null;  //false
undefined==null;  //true
```
- ```innerHTML```
- 计算相差时间
```
    //very nice
    var startDate = date1.getTime();
    
    var endDate = date2.getTime();
    var diff=endDate-startDate
    //计算相差天数
    var days = Math.floor(diff / (1 * 24 * 60 * 60 * 1000));
    //计算相差小时
    var leave1 = diff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数 
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数 
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数 
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数 
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数 
    var seconds = Math.round(leave3 / 1000);
    return [days,hours,minutes,seconds];
```