import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    a: 1
  };

  render() {
    console.log("render");
    return (
      <div>
        <p>{this.state.a}</p>
        <button
          onClick={() => {
            this.setState({ a: 1 }); // 这里并没有改变 a 的值
          }}
        >Click me</button>
        <button onClick={() => this.setState(null)}>setState null</button>
      </div>
    );
  }
}

export default App;
