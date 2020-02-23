import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';
//背景Redux store 仅支持同步数据流。
//使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性

export default createStore(
    combineReducers(reducers),
    //state的初始值
    {
        from: '北京',
        to: '上海',
        isCitySelectorVisible: false,
        currentSelectingLeftCity: false,
        cityData: null,
        isLoadingCityData: false,
        isDateSelectorVisible: false,
        departDate: Date.now(),
        highSpeed: false, //是否选择高铁动车
    },
    applyMiddleware(thunk)
);
