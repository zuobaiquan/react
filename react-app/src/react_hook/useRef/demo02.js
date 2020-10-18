import React, { useEffect, useState } from 'react';

// 需求：组件中定义一个变量，每秒加1，要求大于 5 之后不再增加；

function App() {
  const [count, setCount] = useState(0);
  let timer = null

  useEffect(() => {
    timer = setInterval(() => {
      setCount(count => count + 1) // 注意这里的写法
    }, 1000)
  }, [])

  useEffect(() => {
    if (count >= 5) {
      clearInterval(timer)
    }
  })

  // 此时这样写，不能满足需求。会发现到count>5的时候，继续加1。。。

  // 因为更新state，会导致app组件重新渲染，timer 会重新初始化，而state只在第一次初始化，但是也不便于将 timer 放在state中，毕竟它没有用于渲染组件

  return (
    <div>
      <button type="button"> click:({count}) </button>
    </div>
  )
}

export default App;
