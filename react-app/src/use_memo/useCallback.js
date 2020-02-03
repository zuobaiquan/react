import React,{Component,useState,memo,useMemo,useCallback} from 'react';

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
  const doubleCount = useMemo(()=>{
    return count *2
  },[count==3])
  //当 count== 3 的时候，useMemo中数组的值由 false变为true， double 发生变化
  //当 count ==4 的时候，useMemo 中数组的值。由true 变为 false，double 再次发生变化；

  // const onClick = ()=>{
  //   console.log('click me');  //父组件中定义回调函数
  // }

  // const onClick = useMemo(()=>{
  //     return ()=>{
  //       console.log('click me');
  //     }
  // },[]); //改变了这里


  // 使用 useCallback
  const onClick = useCallback(()=>{
    console.log('click me');
  },[]); //改变了这里

  // useMemo(()=>fn);
  // useCallback(fn); useCallback 相当于是简化写法
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

  //这样，就不会因为父组件中的 回调函数 onClick的变化导致子组件发生变化：
  // 1 子组件中使用 memo函数可以避免重复渲染，而是根据传入的props发生变化时才渲染；
  // 2 父组件中使用 useMemo函数可以避免因为 回调函数的存在，导致子组件的渲染；

  return (
      <>
        <button onClick={() => setCount(count+1)}>count:{count}  doubleCount:{doubleCount}</button>
        <Counter count={doubleCount} onClick={onClick}></Counter>
      </>
  )
}

export default App;
