import React, { Component, useState, createContext, useContext } from 'react';

//在这里定义context的外层组件
const CountContext = createContext();

//子组件(最基础的写法)
class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}

//子组件(优化的写法)适用于类组件
class Bar extends Component {
  static contextType = CountContext;
  render() {
    const count = this.context;
    return (
      <h1>{count}</h1>
    )
  }
}

//hooks中使用 context 可以获取多个 context
function Counter() {
  const count = useContext(CountContext)
  return <h1>{count}</h1>
}

function App() {
  //定义初始化数据
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>count {count} </button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default App;
