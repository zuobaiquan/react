import React, { Component, useState, createContext } from 'react';
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
class Middle extends Component {
	render() {
		return (
			<Foo />
		)
	}
}

function App() {
	//定义初始化数据
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => { setCount(count + 1) }}>count {count} </button>
			<CountContext.Provider value={count}>
				<Middle />
			</CountContext.Provider>
		</div>
	)
}

export default App;
