# JavaScript-data-structures-and-algorithms

[![GitHub stars](https://img.shields.io/github/stars/MoonStartMan/JavaScript-data-structures-and-algorithms?style=social)](https://github.com/MoonStartMan/JavaScript-data-structures-and-algorithms/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/MoonStartMan/JavaScript-data-structures-and-algorithms?style=social)](https://github.com/MoonStartMan/JavaScript-data-structures-and-algorithms/network)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> 使用 JavaScript 实现常用数据结构与算法，包含详细注释和示例代码。

## 项目简介

本仓库专注于使用 JavaScript 语言实现各种经典数据结构和算法。通过实际编码练习，加深对数据结构原理的理解，提升使用 JavaScript 解决算法问题的能力。适合前端开发者系统学习算法知识。

## 学习内容概述

### 数据结构

- **数组 (Array)**：JavaScript 数组的深入理解与高级操作
- **栈 (Stack)**：后进先出(LIFO)数据结构的实现与应用
- **队列 (Queue)**：先进先出(FIFO)数据结构的实现与应用
- **链表 (Linked List)**：单向链表、双向链表的实现
- **集合 (Set)**：ES6 Set 的使用与自定义实现
- **字典/映射 (Dictionary/Map)**：键值对数据结构的实现
- **哈希表 (Hash Table)**：哈希冲突处理与优化
- **树 (Tree)**：二叉树、二叉搜索树的实现
- **图 (Graph)**：图的表示与遍历算法

### 算法

- **排序算法**：冒泡、选择、插入、归并、快速排序
- **搜索算法**：顺序搜索、二分搜索
- **图算法**：深度优先搜索(DFS)、广度优先搜索(BFS)

## 目录结构

```
JavaScript-data-structures-and-algorithms/
├── README.md                          # 项目说明文档
├── javascript数组.md                   # JavaScript 数组详解
├── 栈/                                 # 栈数据结构
│   ├── Stack.js                       # 栈的实现
│   └── 栈的应用.md                     # 栈的实际应用场景
├── 队列/                               # 队列数据结构
│   ├── Queue.js                       # 队列的实现
│   ├── PriorityQueue.js               # 优先队列
│   └── 队列的应用.md                   # 队列的实际应用场景
├── 链表/                               # 链表数据结构
│   ├── LinkedList.js                  # 单向链表
│   ├── DoublyLinkedList.js            # 双向链表
│   └── 链表的应用.md                   # 链表的实际应用场景
└── 相关不熟悉知识点/                    # 知识点总结
    ├── ES6新特性.md
    ├── 闭包与作用域.md
    └── 原型链.md
```

## 学习进度

| 模块 | 状态 | 完成度 | 备注 |
|------|------|--------|------|
| JavaScript 数组 | 已完成 | 100% | 包含完整笔记 |
| 栈 | 已完成 | 100% | 包含实现代码 |
| 队列 | 已完成 | 100% | 包含实现代码 |
| 链表 | 已完成 | 100% | 包含实现代码 |
| 集合与字典 | 计划中 | 0% | 待学习 |
| 哈希表 | 计划中 | 0% | 待学习 |
| 树 | 计划中 | 0% | 待学习 |
| 图 | 计划中 | 0% | 待学习 |

## 知识点总结

### JavaScript 数组核心方法

```javascript
// 添加/删除元素
arr.push(element)      // 尾部添加
arr.pop()              // 尾部删除
arr.unshift(element)   // 头部添加
arr.shift()            // 头部删除
arr.splice(index, count, ...items)  // 任意位置添加/删除

// 查找元素
arr.indexOf(element)   // 查找索引
arr.find(callback)     // 查找符合条件的元素
arr.filter(callback)   // 过滤元素

// 遍历操作
arr.forEach(callback)  // 遍历
arr.map(callback)      // 映射
arr.reduce(callback, initialValue)  // 归约
```

### 栈的实现要点

```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) { this.items.push(element); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
  clear() { this.items = []; }
}
```

### 队列的实现要点

```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) { this.items.push(element); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}
```

## 贡献指南

欢迎提交 Issue 和 Pull Request 来完善本仓库！

### 如何贡献

1. **Fork 本仓库**
2. **创建特性分支** (`git checkout -b feature/新特性`)
3. **提交更改** (`git commit -m '添加新特性'`)
4. **推送到分支** (`git push origin feature/新特性`)
5. **创建 Pull Request**

### 代码规范

- 使用 ES6+ 语法
- 添加 JSDoc 注释
- 包含单元测试（推荐）
- 代码文件使用英文命名，注释使用中文

### 提交 Issue

- 描述清楚问题或建议
- 提供相关代码示例
- 标注浏览器/Node.js 版本（如适用）

## 许可证

本项目采用 [MIT](LICENSE) 许可证开源。

## 相关资源

- [MDN JavaScript 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [数据结构与算法 JavaScript 描述](https://book.douban.com/subject/25945449/)
- [LeetCode 中国](https://leetcode.cn/)

## 致谢

- 感谢所有贡献者的支持
- 感谢开源社区的优质资源

---

**作者**: [MoonStartMan](https://github.com/MoonStartMan)  
**维护**: 持续更新中
