import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionTypes'
import {
  initListAction
} from "./actionCreators";
function* getInitList() {
  try {
    const res = yield axios.get('/api/list.json')
    const action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log(e);
  }
}
// 需要导出 gererator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

// 多个 
// https://github.com/tomphill/redux-saga-course/blob/master/src/sagas/users.js

export default mySaga;