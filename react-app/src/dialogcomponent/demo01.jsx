import React,{Component} from 'react';
import Dialog from './demo01.js'

class App extends Component {
  showHandler=()=> {
    Dialog.show('这是弹层')
  }
  hideHandler=()=> {
    Dialog.hide()
  }
  render(){
    return (
        <div>
            <button onClick={this.showHandler}>show Dialog</button>
            <button onClick={this.hideHandler}>hide Dialog</button>
        </div>
    )
  }
}

export default App;
