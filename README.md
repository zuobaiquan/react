# React

React.js 是一个帮助你构建页面 UI 的库。 React 的组件就相当于 MVC 里面的 View。React.js 不是一个框架，它只是一个库。它只提供 UI （view）层面的解决方案。在实际的项目当中，它并不能解决我们所有的问题，需要结合其它的库，例如 Redux、React-router 等来协助提供完整的解决方法。

好处：

1.组件化——分工、合作
2.虚拟DOM——性能高
3.跨平台——移动端



React全家桶(技术栈)
1.React主体
2.WebPack：grunt、gulp自动化构建工具
3.Flex：布局
4.React-Route：路由
5.Redux：View层
6.Mocha：测试
7.Istanbul：覆盖率



JSX：
1.增强型JS语法——HTML代码直接放JS里
2.babel

注意：
1.有且仅有一个父元素
2.模板字符串

```javascript
 var oDiv=<div>{aaa}</div>;
```

```html
<script type="text/babel">
  const user = {
    firstName: 'zuo',
    lastName: 'baiquan'
  };
  const element = (
    <div>
    <h1>Hello!</h1>
    <h2>{user.firstName}{user.lastName}</h2>
    </div>
  );
  window.onload=function (){
      var oDiv=document.getElementById('div1');
      ReactDOM.render(element,oDiv);
  };
</script>

//ReactDOM.render(element,container,callback)
//element 要渲染的的ReactElement
//container 渲染结果在DOM中插入的位置
//callback 回调函数，可选。传入该值时，会在组件渲染完或更新完成后调用返回值：React组件
```

browser.js
引入它的作用是使浏览器支持`babel`，你可以使用`ES2015`（javascript下一代标准，具体可以看[阮一峰的ECMAScript 6 入门](http://es6.ruanyifeng.com/)）进行编码。
如果你用ES5，可以不引入