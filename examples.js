/**
 * @file examples.js
 * @description JavaScript常见数据结构与算法示例集合，包含排序算法、搜索算法、栈、队列、链表等经典实现的独立JS文件
 * @author MoonStartMan
 * @date 2024
 *
 * 本文件将仓库中分散在HTML文件里的算法实现整合为独立的JavaScript模块，
 * 方便直接引用和测试。每个算法都附有详细的中文注释说明。
 */

// ============================================================
// 一、排序算法
// ============================================================

/**
 * 冒泡排序
 * 时间复杂度: O(n^2) | 空间复杂度: O(1) | 稳定排序
 * 原理: 相邻元素两两比较，将较大的元素逐步"冒泡"到数组末尾
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的数组
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        // 优化标志：如果某轮没有发生交换，说明已经有序
        let swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换相邻元素
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // 提前退出
    }
    return arr;
}

/**
 * 选择排序
 * 时间复杂度: O(n^2) | 空间复杂度: O(1) | 不稳定排序
 * 原理: 每轮从未排序区间找到最小元素，放到已排序区间末尾
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的数组
 */
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

/**
 * 插入排序
 * 时间复杂度: O(n^2) | 空间复杂度: O(1) | 稳定排序
 * 原理: 将未排序元素逐个插入到已排序序列的正确位置
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的数组
 */
function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        const current = arr[i];
        let j = i - 1;
        // 将比current大的元素向后移动
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

/**
 * 快速排序
 * 时间复杂度: O(n log n) 平均 | 空间复杂度: O(log n) | 不稳定排序
 * 原理: 选择基准元素，将数组分为小于和大于基准的两部分，递归排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的数组
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// ============================================================
// 二、搜索算法
// ============================================================

/**
 * 二分查找（有序数组）
 * 时间复杂度: O(log n) | 空间复杂度: O(1)
 * 前提: 数组必须是有序的
 * @param {number[]} arr - 已排序数组
 * @param {number} target - 目标值
 * @returns {number} 目标索引，未找到返回-1
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // 找到目标
        } else if (arr[mid] < target) {
            left = mid + 1; // 目标在右半部分
        } else {
            right = mid - 1; // 目标在左半部分
        }
    }

    return -1; // 未找到
}

// ============================================================
// 三、栈（Stack）- 后进先出
// ============================================================

/**
 * 栈类 - 后进先出（LIFO）数据结构
 * 常见应用: 函数调用栈、撤销操作、括号匹配、表达式求值
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /** 将元素压入栈顶 */
    push(element) {
        this.items.push(element);
    }

    /** 弹出栈顶元素 */
    pop() {
        return this.items.pop();
    }

    /** 查看栈顶元素但不移除 */
    peek() {
        return this.items[this.items.length - 1];
    }

    /** 判断栈是否为空 */
    isEmpty() {
        return this.items.length === 0;
    }

    /** 获取栈中元素个数 */
    size() {
        return this.items.length;
    }

    /** 清空栈 */
    clear() {
        this.items = [];
    }

    /** 转换为字符串 */
    toString() {
        return this.items.join(' ');
    }
}

/**
 * 十进制转二进制（利用栈）
 * @param {number} decNumber - 十进制数
 * @returns {string} 二进制字符串
 */
function decimalToBinary(decNumber) {
    const stack = new Stack();
    let number = decNumber;
    let binaryString = '';

    while (number > 0) {
        stack.push(Math.floor(number % 2)); // 余数入栈
        number = Math.floor(number / 2);
    }

    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 逆序出栈
    }

    return binaryString;
}

// ============================================================
// 四、队列（Queue）- 先进先出
// ============================================================

/**
 * 队列类 - 先进先出（FIFO）数据结构
 * 常见应用: 任务调度、消息队列、广度优先搜索（BFS）
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /** 入队（添加到队尾） */
    enqueue(element) {
        this.items.push(element);
    }

    /** 出队（移除队首元素） */
    dequeue() {
        return this.items.shift();
    }

    /** 查看队首元素 */
    front() {
        return this.items[0];
    }

    /** 判断队列是否为空 */
    isEmpty() {
        return this.items.length === 0;
    }

    /** 获取队列元素个数 */
    size() {
        return this.items.length;
    }
}

/**
 * 优先级队列 - 元素按优先级排序，优先级高的先出队
 * 常见应用: 任务优先级调度、Dijkstra最短路径算法
 */
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * 入队 - 按优先级插入正确位置
     * @param {*} element - 元素
     * @param {number} priority - 优先级（数值越小优先级越高）
     */
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    /** 出队 - 移除优先级最高的元素 */
    dequeue() {
        return this.items.shift();
    }

    /** 查看队首元素 */
    front() {
        return this.items[0];
    }

    /** 判断队列是否为空 */
    isEmpty() {
        return this.items.length === 0;
    }

    /** 获取队列元素个数 */
    size() {
        return this.items.length;
    }
}

// ============================================================
// 五、链表（LinkedList）
// ============================================================

/**
 * 单向链表节点类
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * 单向链表类
 * 常见应用: 实现栈和队列、LRU缓存、多项式运算
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /** 向链表尾部追加元素 */
    append(data) {
        const newNode = new Node(data);

        if (this.length === 0) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    /** 在指定位置插入元素 */
    insert(position, data) {
        if (position < 0 || position > this.length) return false;

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let index = 0;
            while (index < position - 1) {
                current = current.next;
                index++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
        return true;
    }

    /** 获取指定位置的元素 */
    get(position) {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;
        let index = 0;
        while (index < position) {
            current = current.next;
            index++;
        }
        return current.data;
    }

    /** 移除指定位置的元素 */
    removeAt(position) {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let index = 0;
            while (index < position - 1) {
                current = current.next;
                index++;
            }
            current.next = current.next.next;
        }
        this.length--;
        return current.data;
    }

    /** 查找元素索引 */
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    /** 转换为字符串 */
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + (current.next ? ' -> ' : '');
            current = current.next;
        }
        return result;
    }
}

// ============================================================
// 六、测试代码
// ============================================================

console.log('===== 排序算法测试 =====');
const sortArr = [64, 34, 25, 12, 22, 11, 90];
console.log('原始数组:', sortArr.slice());
console.log('冒泡排序:', bubbleSort(sortArr.slice()));
console.log('选择排序:', selectionSort(sortArr.slice()));
console.log('插入排序:', insertionSort(sortArr.slice()));
console.log('快速排序:', quickSort(sortArr.slice()));

console.log('\n===== 搜索算法测试 =====');
const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log('有序数组:', sortedArr);
console.log('查找7的索引:', binarySearch(sortedArr, 7));
console.log('查找6的索引:', binarySearch(sortedArr, 6));

console.log('\n===== 栈测试 =====');
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log('栈内容:', stack.toString());
console.log('栈顶元素:', stack.peek());
console.log('弹出元素:', stack.pop());
console.log('栈大小:', stack.size());
console.log('十进制10转二进制:', decimalToBinary(10));

console.log('\n===== 队列测试 =====');
const queue = new Queue();
queue.enqueue('任务A');
queue.enqueue('任务B');
queue.enqueue('任务C');
console.log('队首元素:', queue.front());
console.log('出队:', queue.dequeue());
console.log('队列大小:', queue.size());

console.log('\n===== 优先级队列测试 =====');
const pq = new PriorityQueue();
pq.enqueue('普通任务', 3);
pq.enqueue('紧急任务', 1);
pq.enqueue('重要任务', 2);
console.log('队首:', pq.front());
while (!pq.isEmpty()) {
    console.log('出队:', pq.dequeue());
}

console.log('\n===== 链表测试 =====');
const list = new LinkedList();
list.append('节点A');
list.append('节点B');
list.append('节点C');
list.insert(1, '插入节点');
console.log('链表:', list.toString());
console.log('获取索引1:', list.get(1));
console.log('查找节点B:', list.indexOf('节点B'));
list.removeAt(2);
console.log('删除索引2后:', list.toString());
