import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

import store from './store'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./store/actionTypes";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    this.handelStoreChange = this.handelStoreChange.bind(this);
    this.handelInputChange = this.handelInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handelStoreChange);
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            allowClear
            value={this.state.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
            placeholder="请输入"
            onChange={this.handelInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  handelStoreChange() {
    console.log("storeChange");
    this.setState(store.getState());
  }
  handelInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  }

  handleItemDelete(index){
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    };
    store.dispatch(action);
  }
}
export default TodoList