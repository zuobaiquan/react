import React, { Component, createContext } from 'react';
const CountContext = createContext();

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
					<Foo />
				</CountContext.Provider>
			</div>
		)
	}

}

export default App;
