## react

# UI框架
https://ant.design/docs/react/introduce-cn


# 使用actionCreator统一创建action
  目录结构清晰

# redux 设计和使用的三项原则
1. store是唯一的
2. 只有store 能够改变自己的内容
3. reducer 一定是纯函数

// 纯函数指的是 给定固定的输入，就一定有固定的输出，而且不会有任何副作用

# redux核心API

createStore 可以帮助我们创建一个store
store.dispatch dispatch方法可以帮助我们派发action ，这个action会传递给store
store.getState 可以帮助我们获取store 里面所有的数据内容
store.subscribe 可以帮助订阅store的改变，只要store发生改变，store.subscribe这个函数接受的回调函数就会被执行
