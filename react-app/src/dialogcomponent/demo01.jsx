import React,{Component} from 'react';
import Dialog from './demo01.js'

class App extends Component {
  showHandler=e=> {
    console.log(e.target.getAttribute("data-id"));
    Dialog.show(<div>这是弹层</div>)
    // Dialog.show('这是弹层')
  }
  hideHandler=()=> {
    Dialog.hide()
  }
  render(){
    return (
        <div>
            <button data-id="btn" onClick={this.showHandler}>show Dialog</button>
            <button onClick={this.hideHandler}>hide Dialog</button>
        </div>
    )
  }
}

export default App;
