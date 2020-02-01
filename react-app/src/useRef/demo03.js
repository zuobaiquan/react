import React,{useRef,useEffect,useState} from 'react';

// 需求：组件中定义一个变量，每秒加1，要求大于 5 之后不再增加；

// 修复 demo2 的bug
// 使用ref，将 timer 改为类似于 类的结构成员变量

function App() {
  const [count,setCount] = useState(0);
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

  return (
      <div>
          <button type="button"> click:({count}) </button>
      </div>
  )
}

export default App;
