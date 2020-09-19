## react

1.声明式开发

2.可以与其他框架并存

3.组件化

4.单向数据流  只允许父组件向子组件传值，不允许子组件不能反过来修改这个值，只读的

5.视图层框架

6.函数式编程  维护性强


## 官方文档
https://reactjs.org/docs/getting-started.html

## React 组件生命周期图示
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



虚拟DOM

1. state数据
2. JSX模板
3. 数据 + 模型 结合，生成真实的DOM来显示
    <div id='abc'><span>hello world</span></div>
4. 生成虚拟DOM(虚拟DOM实际上就是一个 JS 对象，用它来描叙真实DOM) (损耗了性能)
    ['div',{id:'abc'},['span',{},'hello world']]
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
    ['div',{id:'abc'},['span',{},'bye bye']]
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是 span的内容 (极大的提升性能)
8. 直接操作DOM，改变 span中的内容