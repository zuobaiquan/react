import React, { useState, useEffect } from 'react';

// setCount(newCount)和setCount(preCount => newCount) 区别

// setCount(count + 1) 只执行了一次呢，因为每次更新都是独立的闭包，当点击更新状态的时候，函数组件都会重新被调用。快速点击时，当前 count 为 0，即每次点击传入的值都是相同的，那么得到的结果也是相同的，最后 count 变为 1 后不再变化。
// setCount(count => count + 1) 执行三次，因为当传入一个函数时，回调函数将接收当前的 state，并返回一个更新后的值。 三秒后，第一次setCount获取到最新的 count 为 1，然后执行函数将 count 变为 2，接着第二次获取到当前 count 为 2，执行函数将 count 变为了 3。每次获取到的最新 count 不一样，最后结果自然也不同。

// 测试 那么进行第二次实验，我先快速点击 preAdd 三下，然后接着快速点击 add 按钮三次，三秒后结果会怎么样呢。根据以上结论猜测，preAdd 是根据最新值，所以 count 依次变为 1、2、3，然后 add 是传入的当前 count 为 0，最后变为 1。最后结果应该是 1、2、3、1，测试结果正确：
function App() {
  const [count, setCount] = useState(0);
  function add() {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }
  function preAdd() {
    setTimeout(() => {
      // 根据前一时刻的 count 设置新的 count
      setCount(count => count + 1);
    }, 2000);
  }
  // 监听 count 变化
  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <>
      Count: {count}
      <button onClick={add}>add</button>
      <button onClick={preAdd}>preAdd</button>
    </>
  );
}

export default App

// 函数式更新对比普通更新
// 如果需要使用前一时刻的 state(状态) 计算新 state(状态) ，则可以将 函数 传递给 setState 
// 该函数将接收先前 state 的值，并返回更新的 state。
//
// 

