export function createSet(payload) {
  return {
    type: 'set',
    payload
  }
}

export function createAdd(text) {
  let idSeq = Date.now()
  return (dispatch, state) => {
    const { todolist } = state
    if (!todolist.find(v => v.text === text)) {
      dispatch({
        type: 'add',
        payload: {
          id: ++idSeq,
          text,
          complete: false,
        }
      })
    }
  }
}

export function createRemove(payload) {
  return {
    type: 'remove',
    payload
  }
}

export function createToggle(payload) {
  return {
    type: 'toggle',
    payload
  }
}
