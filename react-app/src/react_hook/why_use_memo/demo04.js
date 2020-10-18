import React, { Component, PureComponent } from 'react';

/*
  PureComponent 的局限性
  本来应该要渲染，结果没有 
*/
class Foo extends PureComponent {
  render() {
    console.log("Foo render!")
    return <div>age:{this.props.person.age}</div>
  }
}
class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  }
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
        <Foo person={person} />
      </div>
    );
  }
}

export default App;
