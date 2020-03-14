react-hook 弥补类组件不足

1 状态逻辑复用难：缺少复用机制，渲染属性和高阶组件导致层级冗余；

2 趋向于复杂难以维护： 生命周期函数混杂不相干逻辑，相干逻辑分散在不同生命周期

3 this 指向困扰：内联函数过度创建新句柄，类成员函数不能保证this；


https://www.cnblogs.com/marvintang1001/p/11867719.html

检查 Hook 的规则
安装依赖 npm i eslint-plugin-react-hooks -D

`
"plugins":[
    "react-hooks"
],
"rules":{
    "react-hooks/rules-of-hooks": "error"
}
`


userEffect函数是在 render之后调用的 ，其功能相当于 componentDidMount/和componentDidUpdate，并且该函数有callback函数，其功能是清除上一次副作用 遗留下来的状态 相当于componentWillUnmount
