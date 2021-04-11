# javascript数组

## 创建和初始化数组

``` javascript

// 创建和初始化数组
var daysOfWeek = new Array()
var daysOfWeek = new Array(7)
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday')

```

### 代码解析

+ 使用new关键字，就能简单地声明并初始化一个数组
+ 用这种方式，还可以创建一个指定长度的数组.
+ 另外，也可以直接将数组元素作为参数传递给它的构造器
+ 用new创建数组并不是最好的方式。如果你想在JavaScript中创建一个数组，只用中括号（[]）的形式就行了
+ 使用中括号( [] ) 创建数组

``` javascript

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

```

## 数组长度和遍历数组

### 数组长度

``` javascript
// 获取数组的长度
alert(daysOfWeek.length)
```

### 遍历数组

``` javascript
// 普通for方式遍历数组
for (var i = 0; i < daysOfWeek.length; i++) {
    alert(daysOfWeek[i])
}
// 通过foreach遍历数组
daysOfWeek.forEach(function (value) {
    alert(value)
})
```

