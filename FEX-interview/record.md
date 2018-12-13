<!-- TOC -->

- [HTML](#html)
- [CSS](#css)
    - [CSS3 box-sizing](#css3-box-sizing)
    - [如何实现两列布局](#如何实现两列布局)
- [JS](#js)
    - [同源与跨域](#同源与跨域)
    - [XSS：跨站脚本攻击](#xss跨站脚本攻击)
    - [CSRF：跨站请求伪造](#csrf跨站请求伪造)
    - [JS实现继承的几种方式](#js实现继承的几种方式)
    - [哪些性能优化](#哪些性能优化)
    - [DOM事件类](#dom事件类)
- [ES6与TypeScript](#es6与typescript)
    - [使用箭头函数需要注意的地方](#使用箭头函数需要注意的地方)
- [前端框架](#前端框架)
    - [前端路由](#前端路由)

<!-- /TOC -->

--------------------------------------------------------------------------------

# HTML

--------------------------------------------------------------------------------

# CSS

## CSS3 box-sizing

设置CSS盒模型为标准模型或IE模型。标准模型的宽度只包括content，二IE模型包括border和padding

box-sizing属性可以为三个值之一：

content-box，默认值，border和padding不计算入width之内
padding-box，padding计算入width内
border-box，border和padding计算入width之内

## 如何实现两列布局

1.将元素的display设置为行内元素
2.两个元素全部使用浮动
3.一个元素左浮动，第二个元素不便，同时设置一个margin-left值
4.使用flex-box布局

--------------------------------------------------------------------------------

# JS

## 同源与跨域

什么是同源策略？

限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
一个源指的是主机名、协议和端口号的组合，必须相同

跨域通信的几种方式：

- JSONP
- Hash
- postMessage
- WebSocket
- CORS
- JSONP原理

基本原理：利用script标签的异步加载特性实现。
给服务端传一个回调函数，服务器返回一个传递过去的回调函数名称的JS代码。

## XSS：跨站脚本攻击

它允许用户将恶意代码植入到提供给其他用户使用的页面中，可以简单的理解为一种javascript代码注入。
XSS的防御措施：

过滤转义输入输出
避免使用eval、new Function等执行字符串的方法，除非确定字符串和用户输入无关
使用cookie的httpOnly属性，加上了这个属性的cookie字段，js是无法进行读写的
使用innerHTML、document.write的时候，如果数据是用户输入的，那么需要对象关键字符进行过滤与转义

## CSRF：跨站请求伪造

其实就是网站中的一些提交行为，被黑客利用，在你访问黑客的网站的时候进行操作，会被操作到其他网站上
CSRF防御措施：

检测http referer是否是同域名
避免登录的session长时间存储在客户端中
关键请求使用验证码或者token机制

##JS实现继承的几种方式

借用构造函数实现继承

```
function Parent1(){
    this.name = "parent1"
}
function Child1(){
    Parent1.call(this);
    this.type = "child1";
}
```

缺点：Child1无法继承Parent1的原型对象，并没有真正的实现继承（部分继承）

借用原型链实现继承

```
function Parent2(){
    this.name = "parent2";
    this.play = [1,2,3];
}
function Child2(){
    this.type = "child2";
}
Child2.prototype = new Parent2();
```

缺点：原型对象的属性是共享的

组合式继承

```
function Parent3(){
    this.name = "parent3";
    this.play = [1,2,3];
}
function Child3(){
    Parent3.call(this);
    this.type = "child3";
}
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;
```

## 哪些性能优化

雪碧图，移动端响应式图片，静态资源CDN，减少Dom操作（事件代理、fragment），压缩JS和CSS、HTML等，DNS预解析

## DOM事件类

DOM事件的级别

DOM0，element.onclick = function(){}
DOM2，element.addEventListener(‘click’, function(){}, false);

DOM事件模型是什么：指的是冒泡和捕获

DOM事件流是什么：捕获阶段 -> 目标阶段 -> 冒泡阶段
描述DOM事件捕获的具体流程
window –> document –> documentElement(html标签) –> body –> …. –> 目标对象
Event对象常见应用

event.preventDefault()，阻止默认行为
event.stopPropagation()，阻止事件冒泡
event.stopImmediatePropagation()，阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上，这个方法不接受任何参数。
event.currentTarget，返回绑定事件的元素
event.target，返回触发事件的元素
如何自定义事件
Event，不能传递参数

var eve = new Event('自定义事件名');
ev.addEventListener('自定义事件名', function(){
    console.log('自定义事件')
});
ev.dispatchEvent(eve);
CustomEvent，还可以指定参数

--------------------------------------------------------------------------------

# ES6与TypeScript

##使用箭头函数需要注意的地方

当要求动态上下文的时候，你就不能使用箭头函数，比如：定义方法，用构造器创建对象，处理时间时用 this 获取目标。

箭头函数与传统函数的区别，主要集中在以下方面：

没有this、super、arguments 和 new.target 绑定，这些值由最近一层非箭头函数决定。
不能通过 new 关键字调用，所以不能用作构造函数，否则程序会抛出错误（SyntaxError）。
没有原型。由于不可以通过new 关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在 prototype 这个属性。
不可以改变 this 的绑定，函数内部的 this 值不可以被改变，在函数的生命周期内始终保持一致。
不支持 arguments 对象，所以你必须通过命名参数和不定参数这两种形式访问函数的参数。
不支持重复的命名参数，无论在严格还是非严格模式下都不支持，而在传统的函数规定中只有在严格模式下才不能有重复的命名参数。


--------------------------------------------------------------------------------

# 前端框架

## 前端路由

什么是路由？简单的说，路由是根据不同的 url 地址展示不同的内容或页面

使用场景？前端路由更多用在单页应用上, 也就是SPA, 因为单页应用, 基本上都是前后端分离的, 后端自然也就不会给前端提供路由。

前端的路由和后端的路由在实现技术上不一样，但是原理都是一样的。在 HTML5 的 history API 出现之前，前端的路由都是通过 hash 来实现的，hash 能兼容低版本的浏览器。

两种实现前端路由的方式
HTML5 History两个新增的API：history.pushState 和 history.replaceState，两个 API 都会操作浏览器的历史记录，而不会引起页面的刷新。

Hash就是url 中看到 # ,我们需要一个根据监听哈希变化触发的事件( hashchange) 事件。我们用 window.location 处理哈希的改变时不会重新渲染页面，而是当作新页面加到历史记录中，这样我们跳转页面就可以在 hashchange 事件中注册 ajax 从而改变页面内容。

优点
从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由在访问一个新页面的时候仅仅是变换了一下路径而已，没有了网络延迟，对于用户体验来说会有相当大的提升。

更多内容请看这里

缺点
使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。

--------------------------------------------------------------------------------

- [2017我遇到的前端面试题](https://blog.dunizb.com//2017/09/08/interview-questions-2017/)
