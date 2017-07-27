import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Title extends Component {
  render () {
    return (
      <h1>React 小书</h1>
    )
  }
}
class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}
class App extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render() {
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React {function(){return "sgsgshshshhs"+1+2;}()}</h2>
        </div>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? likedText : unlikedText} 👍
          </button>
      </div>
    );
  }
}

export default App;
