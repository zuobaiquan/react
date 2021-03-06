import React, { Component } from 'react';

class Foo extends Component {
  //使用生命周期函数 shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) {
      return false
    }
    return true
  }
  render() {
    console.log("Foo render!")
    return null
  }
}


class App extends Component {
  state = {
    count: 0
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>点击</button>
        <Foo name='Mike' />
      </div>
    );
  }
}

export default App;
