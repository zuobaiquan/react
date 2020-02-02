import React,{useRef,useEffect,useState} from 'react';

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
  return (
      <div>
          <button type="button" onClick={()=>{setCount(count+1)}}> click:({count}) </button>
      </div>
  )
}

export default App;
