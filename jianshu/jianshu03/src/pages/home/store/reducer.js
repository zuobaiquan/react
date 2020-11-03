import * as actionType from './actionType';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [],
})

// reducer.js中store的数据是不能改变的，用原始的方法要手动的保证store不被修改，存在风险。
// imutable.js可以生成一个不可改变的对象，可以避免掉自己不小心修改掉store的情况。
// fromJS方法可以把一个普通对象变成不可变对象。修改数据时用set方法。

export default (state = defaultState, action) => {
  switch (action.type) {
    // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
    case actionType.GET_HOMRLIST:
      return state.set('topicList', fromJS(action.topicList))
    default:
      return state
  }
}