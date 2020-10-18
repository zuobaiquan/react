import React, { Component, memo } from 'react';

const Foo = memo(function Foo(props) {
  console.log('Foo render')
  return <div>{props.person.age}</div>
})
class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  }
  render() {
    console.log("render");
    const person = this.state.person
    console.log('person', person)
    return (
      <div>
        <button onClick={() => {
          person.age++;
          this.setState({
            person
          })
        }}>点击</button>
        <Foo person={person} />
      </div>
    );
  }
}


// PureComponent为组件提供了对比算法来避免组件做无意义的渲染，减少性能开销。
// 而无状态组件是函数式的，不能继承PureComponent，但可以用memo包裹函数式组件达到同样的效果。

// 链接 https://blog.csdn.net/u013565133/article/details/104000153



export default App;

// React.memo() 一种用于函数组件PureComponent / shouldComponentUpdate形式的
// React.memo()可接受2个参数，
// 第一个参数为纯函数的组件，
// 第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。