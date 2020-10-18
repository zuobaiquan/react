
import React, { useState } from 'react';

// useState 就是一个 Hook 。通过在函数组件里调用它来给组件添加一些内部 state。
// React 会在重复渲染时保留这个 state。
// useState 会返回一对值（数组）：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
// 它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

// useState 唯一的参数就是初始 state。
// useState 按照固定的顺序和数量来调用，并且可以设置传一个参数作为默认值
// 在上面的例子中，我们的计数器是从零开始的，所以初始 state 就是 0。
// 值得注意的是，不同于 this.state，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是。
// 这个初始 state 参数只有在第一次渲染时会被用到。

// 我们声明了一个叫 count 的 state 变量，然后把它设为 0。
// React 会在重复渲染时记住它当前的值，并且提供最新的值给我们的函数。
// 我们可以通过调用 setCount 来更新当前的 count。

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>count {count}</button>
    </div>
  );
}

export default App;
