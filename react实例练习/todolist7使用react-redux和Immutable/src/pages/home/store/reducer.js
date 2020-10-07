import { fromJS } from "immutable";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";
const defaultState = fromJS({
  inputValue :'',
  list:[]
})
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 只有store 能够改变自己的内容
    // reducer 可以接受一个state，但是绝对不能改变state，所以需要重新拷贝一份 state
    // 故不能这么写 state.inputValue = action.value
    return state.set('inputValue', action.value);
  }
  if (action.type === ADD_TODO_ITEM) {
    return state.merge({
      list: state.get("list").concat(state.get("inputValue")),
      inputValue: "",
    });
  }
  if (action.type === DELETE_TODO_ITEM) {
    return state.update("list", (todos) => todos.filter((item,i) => i !== action.index))
  }
  if (action.type === INIT_LIST_ACTION) {
    return state.set('list', action.data);
  }
  return state;
};