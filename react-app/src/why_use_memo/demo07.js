import React, { Component, memo } from 'react';

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
  render() {
    console.log("render");
    const person = this.state.person
    console.log('person', person)
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
