import React from 'react'

class Inputitem extends React.Component{
  constructor(){
    super();
    this.state={
      value:''
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value}
          onChange={this.changeHandler.bind(this)}
          onKeyUp={this.keyUpHandler.bind(this)}
        />
      </div>
    )
  }
  changeHandler(e){
    // 实时同步数据
    this.setState({
      value:e.target.value
    });
  }
  keyUpHandler(e){
    const value = this.state.value
    if (e.keyCode === 13 && value.trim()) {
        // 提交并清空数据
        this.props.submitFn(value);
        this.setState({value: ''})
    }
  }
}
export default Inputitem
