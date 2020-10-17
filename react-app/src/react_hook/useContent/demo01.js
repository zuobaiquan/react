import React, { Component, createContext } from 'react';
const CountContext = createContext();

//定义：Context提供了一种方式，能够让数据在组件树中传递而不必一级一级动手传递
//结构：Provider提供数据，Consumer去使用数据

class Foo extends Component {
	render() {
		return (
			<CountContext.Consumer>
				{
					count => <h1>{count}</h1>
				}
			</CountContext.Consumer>
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
