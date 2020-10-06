import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./actionTypes";

const defaultState = {
  inputValue:'',
  list:[1,2,3]
}

export default (state = defaultState, action) => {
  console.log('action',action)
  if (action.type === CHANGE_INPUT_VALUE) {
    // reducer 可以接受一个state，但是绝对不能改变state，所以需要重新拷贝一份 state
    const newState = JSON.parse(JSON.stringify(state));

    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};