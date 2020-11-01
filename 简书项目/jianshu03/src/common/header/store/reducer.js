import * as actionType from './actionType';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

// reducer.js中store的数据是不能改变的，用原始的方法要手动的保证store不被修改，存在风险。
// imutable.js可以生成一个不可改变的对象，可以避免掉自己不小心修改掉store的情况。
// fromJS方法可以把一个普通对象变成不可变对象。修改数据时用set方法。

export default (state = defaultState, action) => {
  switch (action.type) {
    // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
    case actionType.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionType.SEARCH_BLUR:
      return state.set('focused', false)
    case actionType.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      })
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionType.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state
  }
}