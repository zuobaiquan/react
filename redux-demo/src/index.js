
// createStore创建一个仓库，传入一个清单
import {createStore} from 'redux'
import render from './render'
import reducers from './reducers'
const store = createStore(reducers)
store.subscribe(()=>{
    render({
        state: store.getState(),
        dispatch: store.dispatch
    })
})
render({
    state: store.getState(),
    dispatch:store.dispatch
})