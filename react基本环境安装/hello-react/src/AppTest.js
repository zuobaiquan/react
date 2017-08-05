import React, { Component } from 'react'
class AppTest extends Component {
  constructor () {
    super();
    this.state = {
      isShowHeader: true
    }
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }
  handleShowOrHide () {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }
  render () {
    return (
      <div>
        {this.state.isShowHeader ? <div>11111</div> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

export default AppTest
