import React, { useRef, forwardRef } from 'react'
//在有些时候我们想要操作子组件中的DOM节点，说到获取DOM节点，可能我们会第一时间想到ref。
//可是，如果我们是直接在子组件上写ref，获得的只是子组件，而不是子组件下的某个DOM节点。

//这个时候就可以通过React.forwardRef来实现。
// 官方建议 forwardRef  结合 useImperativeHandle 使用
const MyInput = forwardRef((props, ref) => {
  console.log('ref', ref);
  return <input type="text" ref={ref}></input>
})

// 当我们在父组件里面点击这个聚焦button的时候，会调用子组件里面input的聚焦
export default function ForwardDemo() {
  const inputRef = useRef()
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}

// forwardRef 方法接收一个渲染函数作为其唯一参数，这个渲染函数有两个参数：

// props 传入组件的所有 props，除 ref 外
// ref 传入组件的 ref 属性
// forwardRef 方法返回一个 React 组件。