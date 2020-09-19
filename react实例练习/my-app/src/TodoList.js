import React,{Component,Fragment } from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          <input
            id="inputArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  getTodoItem(){
    return this.state.list.map((item, index) => {
        return (
          <TodoItem
            content={item}
            key={index}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        );
    });
  }
  handleInputChange(e) {
    const inputValue = e.target.value;
    this.setState(() => ({
        inputValue,
    }));
    // this.setState(()=>{
    //     return {
    //         inputValue,
    //     };
    // })
  }
  handleBtnClick() {
    this.setState((preState)=>{
      return {
        list: [...preState.list, preState.inputValue],
        inputValue: "",
      }
    })
  }
  handleItemDelete(index){
    this.setState((preState)=>{
      const list = [...preState.list] //拷贝
      list.splice(index,1)    
      return {
        list,
      }
    })

    // immutable
    // state不允许我们做任何的改变
    // 避免下面的写法
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list:this.state.list
    // });
  }
}
export default TodoList;