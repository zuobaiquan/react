import React from 'react'

class Listitem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const data=this.props.todos;
    return (
      <ul>{
          data.map((item,index)=>{
            return <li key={index} onClick={this.clickHandler.bind(this, item.id)}>{item.value}</li>
          })
        } </ul>
    )
  }
  clickHandler(id){
    this.props.deleteFn(id);
  }
}
export default Listitem
