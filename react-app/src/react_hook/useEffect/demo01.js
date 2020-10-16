import React, { Component } from 'react';

class App extends Component {
	state = {
		count: 0,
		size: {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
	onResize = () => {
		this.setState({
			size: {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		})
	}
	componentDidMount() {
		document.title = this.state.count;
		window.addEventListener('resize', this.onResize, false);
	}
	componentDidUpdate() {
		document.title = this.state.count;
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize, false);
	}
	render() {
		let { count, size } = this.state;
		return (
			<button onClick={() => { this.setState({ count: count + 1 }) }}>count {count} size:{size.width}X{size.height}</button>
		)
	}
}

export default App;


//总结：为了实现初始化时和数据更新时，title发生变化，同样的交互代码要在两个生命周期中执行两次，类似的 再加上 监听函数，需要在卸载生命周期中 去掉卸载函数;
// 如果使用使用 effect hooks


