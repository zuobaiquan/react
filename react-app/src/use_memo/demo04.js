import React, { useState, memo, useMemo } from 'react';

// 用memo包裹Counter函数，只有count发生变化的时候，才执行Count函数

const Counter = memo(function Counter(props) {
  console.log('doubleCount 发生变化的时候才执行');
  return (
    <>
      <div onClick={props.onClick}>{props.count}</div>
    </>
  )
})

function App() {
  const [count, setCount] = useState(0)
  const doubleCount = useMemo(() => {
    return count * 2
  }, [count])
  //当 count== 3 的时候，useMemo中数组的值由 false变为true， double 发生变化
  //当 count ==4 的时候，useMemo 中数组的值。由true 变为 false，double 再次发生变化；

  // const onClick = ()=>{
  //   console.log('click me');  //父组件中定义回调函数
  // }

  const onClick = useMemo(() => {
    return () => {
      console.log('click me');
    }
  }, []); //改变了这里

  //给 子组件 Counte 增加 回调函数 onClick
  //由于回调函数 onClick 的存在，每次父组件中app的变化，都会导致子组件发生渲染；所以可以在父组件中使用 memo
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count:{count}  doubleCount:{doubleCount}</button>
      <Counter count={doubleCount} onClick={onClick}></Counter>
    </>
  )
}

export default App;
