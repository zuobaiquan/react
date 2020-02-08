function combineReducers(reducers){
  return function reducer(state,action){
    const changed={}
    for (let key in reducers) {
      changed[key]=reducers[key](state[key],action)
    }
    return {
      ...state,
      ...changed
    }
  }
}
const reducers={
  todolist(state,action){
    const {type,payload} = action
    switch (type) {
      case 'set':
        return payload
      case 'add':
        return [...state,payload]
      case 'remove':
        return state.filter(item=>{
          return item.id!==payload
        })
      case 'toggle':
        return state.map(item=>{
          return item.id===payload?{...item,complete:!item.complete}:item
        })
      default:

    }
    return state
  },
  incrementCount(state,action){
    const {type} = action
    switch (type) {
      case 'set':case 'add':
        return state+1
        break;
      default:
    }
    return state
  }
}

export default combineReducers(reducers)
