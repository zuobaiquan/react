export function createSet(payload){
  return {
    type:'set',
    payload
  }
}

export function createAdd(text){
  let idSeq=Date.now()
  return (dispatch,state)=>{
    // 用 setTimeout 模拟异步请求

    // 这么写，看似没有问题，但是实际上是有bug的

    //比如列表中，有 123 这条数据，我们再次添加123，并且立马删除原来列表的123，我们发现过了3秒，数据仍然无法删除
    //原因是 异步action发起时，state已经是不可变的，我们必须获取最新的state
    //如何实现呢，见 例04 demo
    setTimeout(()=>{
      let { todolist } = state
      if(!todolist.find(v=>v.text==text)){
        dispatch({
          type:'add',
          payload:{
            id:++idSeq,
            text,
            complete:false,
          }
        })
      }
    },3000)

  }
}

export function createRemove(payload){
  return {
    type:'remove',
    payload
  }
}

export function createToggle(payload){
  return {
    type:'toggle',
    payload
  }
}
