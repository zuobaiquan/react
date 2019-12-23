import React,{Component,PureComponent} from 'react';

/*
  PureComponent 有局限性
  只有传入属性本身的对比，属性内部变化则不行

  Memo04有实例
*/
class Foo extends PureComponent{
  render(){
    console.log("Foo render!")
    return null
  }
}
class App extends Component {
  state={
    count:0
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>点击</button>
        <Foo name='Mike' />
      </div>
    );
  }
}

export default App;
