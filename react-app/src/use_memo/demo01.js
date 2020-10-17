import React, { Component, memo } from 'react';

//无状态组件
const Foo = memo(function Foo(props) {
  console.log('Foo render')
  return <div>{props.person.age}</div>
})

class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  }
  callback = () => {

  };
  render() {
    console.log("render");
    const person = this.state.person
    return (
      <div>
        <button onClick={() => {
          person.age++;
          this.setState({
            person
          })
        }}>点击</button>
        <Foo person={person} cb={this.callback} />
      </div>
    );
  }
}

export default App;
