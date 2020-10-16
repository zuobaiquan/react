import React, { useState, useEffect } from 'react';

function App() {
	//定义初始化数据
	const [count, setCount] = useState(0);
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	});
	//常规函数
	const onResize = () => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		})
	}
	useEffect(() => {
		window.addEventListener('resize', onResize, false);
		return () => { //回调函数，默认是组件重渲染和组件卸载的时候执行
			window.removeEventListener('resize', onResize, false);
		}
	}, []);
	const onClick = () => {
		console.log("click")
	};
	useEffect(() => {
		// 一旦dom元素被替换，我们绑定的事件就失效了，所以我们必须要追踪dom的最新状态
		// 有了useEffect ，使用回调清理函数，同时保证每次渲染后都会运行
		// 如果第二个参数不写，则每次都会执行这个 useEffect ，如果为空数组，则只执行一次
		document.querySelector("#size").addEventListener("click", onClick, false)
		return () => {
			document.querySelector("#size").removeEventListener("click", onClick, false)
		}
	})
	return (
		<div>
			<button onClick={() => { setCount(count + 1) }}>Click {count}</button>
			{
				count % 2 === 0 ? <span id="size">size：{size.width}*{size.height}</span> : <p id="size">size：{size.width}*{size.height}</p>
			}
		</div>
	)
}

export default App;


//总结：为了实现初始化时和数据更新时，title发生变化，同样的交互代码要在两个生命周期中执行两次，类似的 再加上 监听函数，需要在卸载生命周期中 去掉卸载函数;
// 如果使用使用 effect hooks
//
// userEffect函数是在 render之后调用的 ，其功能相当于 componentDidMount/和componentDidUpdate，并且该函数有callback函数，其功能是清除上一次副作用 遗留下来的状态 相当于componentWillUnmount
