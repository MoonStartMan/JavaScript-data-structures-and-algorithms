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

## 数组的常见操作

### 添加元素

假如我们有一个数组：numbers,初始化0~9

``` javascript
//	初始化一个数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

+ 添加一个元素到数组的最后位置

``` javascript
//	添加一个元素到数组的最后位置
//	方式一：
numbers[numbers.length] = 10

//	方式二:
numbers.push(11)
numbers.push(12, 13)

alert(numbers)
```

+ 在数组首位插入一个元素

``` javascript
//	在数组首位插入一个元素
for (var i = numbers.length; i > 0; i--) {
	numbers[i] = numbers[i-1]
}
numbers[0] = -1
alert(numbers)	//	-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
```

上面的代码性能并不算非常高。

+ 通过unshift方法

``` javascript
numbers.unshift(-2)
numbers.unshift(-4, -3)
alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
```

### 删除元素

+ 如果希望删除数组最后的元素，可以使用pop()方法

``` javascript
// 删除最后的元素
numbers.pop()
alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12
```

+ 如果我们希望能够移除的首位元素，自己实现代码

``` javascript
for(var i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i+1]
}
numbers.pop()
alert(numbers)
```

+ 当然，我们可以直接使用shift方法来实现:

``` javascript
numbers.shift()
alert(numbers)
```

### 任意位置

+ 通过splice删除数据

``` javascript
// 删除指定位置的几个元素
numbers.splice(5, 3)
alert(numbers) // -4,-3,-2,-1,0,4,5,6,7,8,9,10,11,12,13
```

+ 上面的代码会删除索引为5,6,7位置的元素
+ 第一个参数表示索引起始的位置为5(其实是第6个元素，因为索引从0开始)，删除3个元素

+ 通过splice来插入数据

``` javascript
// 插入指定位置元素
numbers.splice(5, 0, 3, 2, 1)
alert(numbers) // -4,-3,-2,-1,0,3,2,1,4,5,6,7,8,9,10,11,12,13
```

代码解析

+ 上面的代码会从索引为5的位置开始插入数据. 其他数据依次向后位移.
+ 第一个参数依然是索引值为5(第六个位置)
+ 第二个参数为0时表示不是删除数据, 而是插入数据.
+ 后面紧跟的是在这个位置要插入的数据, 可以是其他类型, 比如"a", "b", "c".

+ 通过splice来修改数据

``` javascript
// 修改指定位置的元素
numbers.splice(5, 3, "a", "b", "c")
alert(numbers) // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
```

代码解析

+ 上面的代码会从索引5的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
+ 第一个参数依然是索引的位置为5(第六个位置)
+ 第二个参数是要将数组中多少个元素给替换掉, 我们这里是3个(也可以使用3个元素来替换2个, 可以自己尝试一下)
+ 后面跟着的就是要替换的元素.

## 数组的其他操作

| 方法名 | 方法描述 |
| --- | --- |
| concat | 连接2个或更多数组，并返回结果 |
| every | 对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回true, 否则返回false |
| filter | 对数组中的每一项运行给定函数，返回该函数会返回 true的项组成的数组 |
| forEach | 对数组中的每一项运行给定函数。这个方法没有返回值 |
| join | 将所有的数组元素连接成一个字符串 |
| indexOf | 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1 |
| lastIndexOf | 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值 |
| map | 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组 |
| reverse | 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个 |
| slice | 传入索引值，将数组里对应索引范围内的元素作为新数组返回 |
| some | 对数组中的每一项运行给定函数，如果任一项返回 true，则结果为true, 并且迭代结束 |
| sort | 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数 |
| toString | 将数组作为字符串返回 |
| valueOf | 和 toString类似，将数组作为字符串返回 |	