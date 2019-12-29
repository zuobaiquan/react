import React,{useState} from 'react';

function App(props){
    //state的默认值是基于 props 的：注意：点击组件内的按钮，state中的count发生变化，组件将渲染，但设置默认state只在第一次时渲染
    let [count,setCount] = useState(()=>{
      console.log("init count")  //这种初始化方式 函数为初始值时只被执行一次
      return props.defaultCount || 0;
    });
    return (
        <button onClick = {()=>{setCount(count++)}}>Click {count}</button>
    )
}

export default App
