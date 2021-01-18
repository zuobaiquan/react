import React, { useReducer } from 'react';

function App() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state + 1
      case 'minus':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => { dispatch({ type: 'add' }) }}>加</button>
      <button onClick={() => { dispatch({ type: 'minus' }) }}>减</button>
    </div>
  )
}

export default App;