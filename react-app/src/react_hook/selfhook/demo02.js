import React,{useRef,useEffect,useState} from 'react';

// 自定义hook 方便复用状态逻辑 Custom Hooks
// 这个例子说明 hook 可以返回jsx参与渲染，更说明hook与函数组件的的相似性
function useCounter(count){
  return (
    <h3>{count}</h3>
  )
}


function useCount(defaultCount){
  const [count,setCount] = useState(defaultCount);
  let timer = useRef();

  useEffect(()=>{
    timer.current = setInterval(()=>{
      setCount(count=>count+1)  // 注意这里的写法
    },1000)
  },[])

  useEffect(()=>{
    if(count>=5){
      clearInterval(timer.current)
    }
  })

  return [count,setCount]

}


function App() {
  let [count,setCount] = useCount(1)
  let Counter = useCounter(count);
  return (
      <div>
          <button type="button"> count:({count}) </button>
          {Counter}
      </div>
  )
}

export default App;
