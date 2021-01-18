import React, { useReducer } from 'react';

function App() {
  const initialState = {
    count: 0,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {
          count: state.count + 1
        }
      case 'minus':
        return {
          count: state.count - 1
        }
      default:
        return {
          ...state
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => { dispatch({ type: 'add' }) }}>加</button>
      <button onClick={() => { dispatch({ type: 'minus' }) }}>减</button>
    </div>
  )
}

export default App;