react-hook 弥补类组件不足

1 状态逻辑复用难：缺少复用机制，渲染属性和高阶组件导致层级冗余；

2 趋向于复杂难以维护： 生命周期函数混杂不相干逻辑，相干逻辑分散在不同生命周期

3 this 指向困扰：内联函数过度创建新句柄，类成员函数不能保证 this；

memo 和 userMemo
memo 优化页面的重渲染，与 PureComponent 功能类似，针对的是组件的渲染。
userMemo 针对的函数逻辑是否重新渲染，本质都是同一套算法，判断依赖是否发生改变，进而决定是否触发特定逻辑

https://www.cnblogs.com/marvintang1001/p/11867719.html

检查 Hook 的规则
安装依赖 npm i eslint-plugin-react-hooks -D

`"plugins":[ "react-hooks" ], "rules":{ "react-hooks/rules-of-hooks": "error" }`

react-hooks/exhaustive-deps  检查 effect 依赖

userEffect 函数是在 render 之后调用的 ，其功能相当于 componentDidMount/和 componentDidUpdate，并且该函数有 callback 函数，其功能是清除上一次副作用 遗留下来的状态 相当于 componentWillUnmount
