import React,{useRef,useEffect,useState} from 'react';

// 自定义hook 方便复用状态逻辑 Custom Hooks

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
  let [count2,setCount2] = useCount(-1)

  return (
      <div>
          <button type="button"> count:({count}) </button>
          <button type="button"> count2:({count2}) </button>
      </div>
  )
}

export default App;
