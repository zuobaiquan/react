import React,{Component,PureComponent} from 'react';

/*
  PureComponent 的局限性

  如果想坚决使用PureComponent
*/
class Foo extends PureComponent{
  render(){
    console.log("Foo render!")
    return <div>{this.props.person.age}</div>
  }
}
class App extends Component {
  state={
    count:0,
    person:{
      age:1
    }
  }
  render() {
    console.log("render");
    const person = this.state.person
    return (
      <div>
        <button onClick={()=>{
          person.age++;
          this.setState({
            person
          })
        }}>点击</button>
        <Foo person={person} cb={()=>{}} />
      </div>
    );
  }
}

//传入的内联函数，每次都是新的。所以Foo 会重新渲染
//每次改变父组件的state值，都会创建一个新的函数对象。子组件 Foo 都会被重新渲染



export default App;
