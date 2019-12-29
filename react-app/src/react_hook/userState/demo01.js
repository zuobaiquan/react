import React,{Component} from 'react';

class App extends Component {
  state={
    count:0
  }
  render() {
    console.log("render");
    const {count} =this.state
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            count:count+1
          })
        }}>count {count}</button>
      </div>
    );
  }
}

export default App;
