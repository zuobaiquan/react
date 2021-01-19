import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef])

  return <input type="text" ref={inputRef}></input>
})

// 我们执行的这个focus本质是useImperativeHandle里面的focus,然后我们在子组件里面再定义一个useRef,在子组件把inputRef赋给input,相当于子组件内部先获取了这个focus,然后在父组件再调用
// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。

export default function UseImperativeHandle() {
  const inputRef = useRef()
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}