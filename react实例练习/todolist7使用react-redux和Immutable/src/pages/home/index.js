import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store";
class TodoList extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            allowClear
            value={this.props.inputValue}
            style={{ width: "300px", marginRight: "10px" }}
            placeholder="请输入"
            onChange={this.props.handelInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    this.props.getTodoListData();
  }
}
// connect 连接 组件和store , 规则在于mapStateToProps ，state的值映射到 props
const mapStateToProps = (state) => {
  return {
    inputValue: state.getIn(['home','inputValue']),
    list: state.getIn(['home', 'list'])
  };
};
// 把store.dispatch挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    handelInputChange(e) {
      const action = actionCreators.getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = actionCreators.getAddItemAction();
      dispatch(action);
    },
    handleItemDelete(index) {
      const action = actionCreators.getDeleteItemAction(index);
      dispatch(action);
    },
    getTodoListData() {
      const action = actionCreators.getTodoList();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
