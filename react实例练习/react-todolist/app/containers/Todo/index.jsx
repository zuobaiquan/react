import React from 'react'
import Inputitem from '../../components/Input';
import Listitem from '../../components/List';
class Todo extends React.Component {
  constructor(){
    super();
    this.state={
      todolist: []
    }
  }
  render(){
    return (
      <div>
        <Inputitem submitFn={this.handelsubmitFn.bind(this)} />
        <Listitem todos={this.state.todolist} deleteFn={this.handelDelete.bind(this)} />
      </div>
    )
  }
  handelsubmitFn(value){
    this.setState({
      todolist:this.state.todolist.concat({
        id:this.state.todolist.length,
        value:value
      })
    })
    // this.state.todolist.push({
    //   id:this.state.todolist.length,
    //   value:value
    // });
    // this.setState({
    //   todolist:this.state.todolist
    // })
  }
  handelDelete(id){
    // this.state.todolist.splice(id,1);
    // this.setState({
    //   todolist:this.state.todolist
    // })
    this.setState({
        todolist: this.state.todolist.filter(item => {
            if (item.id !== id) {
                return item
            }
        })
    })
  }
}
export default Todo;
