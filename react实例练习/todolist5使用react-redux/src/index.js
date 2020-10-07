import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import store from './store'
import { Provider } from 'react-redux'
// Provider连接store ，使得Provider内部的组件都可以获取store中的数据
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
ReactDOM.render(App, document.getElementById("root"));
