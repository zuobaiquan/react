import React,{useRef,useEffect,useCallback,useState} from 'react';

// 自定义hook 方便复用状态逻辑 Custom Hooks
// 这个例子说明 hook 可以返回jsx参与渲染，更说明hook与函数组件的的相似性
function useCounter(count){
  let size=useSize()
  return (
    <h3>count:{count} size:{size.width}*{size.height}</h3>
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

function useSize(){
    const [size,setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[]);

    useEffect(()=>{
        window.addEventListener('resize',onResize,false);
        return ()=>{
            window.removeEventListener('resize',onResize,false);
        }
    },[])

    return size
}

function App() {
  let [count,setCount] = useCount(1)
  let size=useSize()
  let Counter = useCounter(count);
  return (
      <div>
          <button type="button"> count:({count}) size:{size.width}*{size.height}</button>
          {Counter}
      </div>
  )
}

export default App;
