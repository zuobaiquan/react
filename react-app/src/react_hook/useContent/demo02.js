import React, { Component, createContext } from 'react';
const CountContext = createContext();
//效果和使用Consumer没有什么区别。
//可见只有一个Context的时候，使用contextType要比使用Consumer简单的多。

class Foo extends Component {
	static contextType = CountContext;
	render() {
		return (
			<h1>count:  {this.context}</h1>
		)
	}
}
class Middle extends Component {
	render() {
		return (
			<Foo />
		)
	}
}

class App extends Component {
	state = {
		count: 0
	}
	//定义初始化数据
	render() {
		let { count } = this.state
		return (
			<div>
				<button onClick={() => { this.setState({ count: count + 1 }) }}>count {count} </button>
				<CountContext.Provider value={count}>
					<Middle />
				</CountContext.Provider>
			</div>
		)
	}

}

export default App;
