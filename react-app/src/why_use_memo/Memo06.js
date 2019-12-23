import React,{Component,PureComponent} from 'react';

/*
  PureComponent 的局限性

  坚决使用PureComponent
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
  callback=()=>{

  };
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
        <Foo person={person} cb={this.callback} />
      </div>
    );
  }
}

//callback 使用改写成 类属性，Foo 不会重新渲染



export default App;
