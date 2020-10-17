import React,{Component} from 'react';

class Foo extends Component{
  render(){
    console.log("Foo render!")
    return null
  }
}


class App extends React.Component {
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
