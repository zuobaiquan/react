import React, { Component, useEffect,memo } from 'react';
// , PureComponent, memo, useState, useMemo, useCallback


class App extends Component {
  state = {
    count: 0,
    person: {
      age: 18
    }
  };

  callback = () => { }

  render() {
    const person = this.state.person;
    return (
      <div className="app">
        <p>count值：{this.state.count}</p>
        <button
          onClick={() => {
            person.age++
            this.setState({
              count: this.state.count + 1,
              person
            })
          }}>
          Add
        </button>
      </div>
    )
  }
}

const Foo = function Foo(props) {
  console.log('Foo reander');
  useEffect(()=>{
    console.log(1111)
  },[])
  return <div>1111子组件
      <App />
  </div>;
}

export default Foo;