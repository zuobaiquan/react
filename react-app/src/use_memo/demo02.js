import React, { Component, useState, memo, useMemo } from 'react';

//无状态组件
function Counter(props) {
  return (
    <>
      <div>{props.count}</div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const doubleCount = useMemo(() => {
    return count * 2
  }, [count])
  //当 count== 3 的时候，useMemo中数组的值由 false变为true， double 发生变化
  //当 count ==4 的时候，useMemo 中数组的值。由true 变为 false，double 再次发生变化；
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count:{count}  doubleCount:{doubleCount}</button>
      <Counter count={count}></Counter>
    </>
  )
}

export default App;
