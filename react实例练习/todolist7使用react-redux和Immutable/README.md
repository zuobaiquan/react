## react

# UI框架
https://ant.design/docs/react/introduce-cn


github：https://github.com/immutable-js/immutable-js
官方文档：https://immutable-js.github.io/immutable-js/docs/#/fromJS

https://github.com/gajus/redux-immutable

immutable和redux-immutable的使用


# 安装
npm install immutable --save
npm install redux-immutable --save

# 生成immutable对象，获取对象属性，并修改对象属性

（1）在具体的app.js文件中，使用connect方法，来获得state。当然在这个app外部需要调用Provider组件。


`
import { Provider } from 'react-redux';
// 省略了部分代码
<Provider store={store}>
	<App></App>
</Provider>
`
（2）在reducer.js，调用redux-immutable的combineReducers，来代替redux的combineReducers，生成immutable对象。

`
import { combineReducers } from "redux-immutable";
import { reducer as reducer_header } from "../header/store";
export default combineReducers({
    header: reducer_header
})
`
这样看来在一开始构建整个项目目录时，需要一个store.js来引入redux中间件(devTools，thunk，saga)，为Provider提供一个包含redux中间件的store。然后你还需要一个reducer.js方便子组件使用store，这个reducer的返回对象需要使用redux-immutable的combineReducers方法。当然如果你没使用immutable，使用redux也可以。


reducer.js中，调用immutable的fromJS，生成immutable对象。
需要注意的是，只有经过fromJS方法调用过后的state，才具有set、merge、get等方法

`
// reducer_header
import * as actionType from './actionType.js';
import { fromJS } from 'immutable';

let defaultState = fromJS({
    searchFocus: false,
    searchInfoMouseIn: false,
    searchList: [],
    searchListCurPage: 0,
    searchListTotalPage: 0,
});

export const reducer =  ((state=defaultState, action) => {
    switch(action.type){
        case actionType.ChangeSearchFocus:
        	// 将state深拷贝一份后，调用set方法修改'searchFocus'为action.value
            return state.set('searchFocus', action.value);
        case actionType.ChangeSearchList:
            return state.merge({
                searchList: action.value,
                searchListTotalPage: action.searchListTotalPage
            });
            // return state.set('searchList', action.value)
            //             .set('searchListTotalPage', action.searchListTotalPage);
        default:
            return state
    }
});
`

`
import { connect } from 'react-redux';
// 省略了部分代码
const mapState = (state) => {
    return {
        searchFocus: state.header.get('searchFocus'),
    }
};
export default connect(mapState, mapDispatch)(App)
`

# 将immutable对象转换为js对象

`
const imm = fromJS({wk: 'WK'});
// im:  Map {size: 1, _root: ArrayMapNode, __ownerID: undefined, __hash: undefined, __altered: false}
console.info('im: ', imm);
// js:  {wk: "WK"}
console.info('js: ', imm.toJS());
`

# 为immutable对象concat值

let imm = fromJS({wk: ['w', 'k']});
// js:  (2) ["w", "k"]
console.info('js: ', imm.get('wk').toJS());
imm = imm.set('wk', imm.get('wk').concat(['W', 'K']));
// js:  (4) ["w", "k", "W", "K"]
console.info('js: ', imm.get('wk').toJS());





