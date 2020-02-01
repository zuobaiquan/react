import React,{Component,useRef,useState,memo,useMemo,useCallback} from 'react';

class Counter extends Component {
    speak(){
        console.log('speak');
    }
    render(){
        console.log("Counter render!");
        const { props } = this;
        return (
            <h1 onClick={props.onClick}>{props.count}</h1>
　　　　　)
     }
}

function App() {
  const [count,setCount] = useState(0);
  const counterRef = useRef();//创建一个ref，在组件中使用该counrerRef

  const onClick = useCallback(()=>{
      counterRef.current.speak();//执行子组件中的speak函数,current属性 获取最终的值
  },[counterRef]);

  return (
      <div>
          <button type="button" onClick={()=>{setCount(count+1)}} >
              click:({count})
          </button>
          <Counter count={count} ref={counterRef} onClick={onClick}/>
      </div>
  )
}

export default App;
