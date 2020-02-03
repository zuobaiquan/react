import React,{Component,useRef,useEffect,useState,memo,useMemo,useCallback} from 'react';
import '../todo.css'

let idSeq=Date.now()
const LS_KEY='$-todos_'

const Control = memo(function Control(props){
  const { dispatch }=props
  const inputRef=useRef()
  const onSubmit=(e)=>{
    e.preventDefault();
    let newText=inputRef.current.value.trim()
    if(newText.length==0){
      return ;
    }
    dispatch({
      type:'add',
      payload:{
        id:++idSeq,
        text:newText,
        complete:false
      }
    })
    inputRef.current.value=''
  }

  return (
    <div className="control">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="new-todo"
          placeholder="请输入内容"
        />
      </form>
    </div>
  )
})

const TodoItem = memo(function TodoItem(props){
  const {
    todo:{
      id,
      text,
      complete
    },
    dispatch
  } = props
  const onChange=()=>{
    dispatch({type:'toggle',payload:id})
  }
  const onRemove=()=>{
    dispatch({type:'remove',payload:id})
  }
  return (
    <li className="todo-item">
      <input
      type="checkbox"
      onChange={onChange}
      checked={complete} />
      <label className={complete?'complete':''}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
})

const Todos = memo(function Todos(props){
  const {todolist,dispatch} = props
  return (
    <ul>
    {
      todolist.map(item=>{
        return (
          <TodoItem
           key={item.id}
           todo={item}
           dispatch={dispatch}
           />)
      })
    }
    </ul>
  )
})

function TodoList() {
  const [todolist,setTodos]=useState([])
  const dispatch=useCallback((action)=>{
    const {type,payload} = action
    switch (type) {
      case 'set':
        setTodos(payload)
        break;
      case 'add':
        setTodos(todolist=>[...todolist,payload])
        break;
      case 'remove':
        setTodos(todolist=>todolist.filter(item=>{
          return item.id!==payload
        }))
        break;
      case 'toggle':
        setTodos(todolist=>todolist.map(item=>{
          return item.id===payload?{...item,complete:!item.complete}:item
        }))
      default:
    }
  },[])

  //注意两个useEffect的顺序
  useEffect(()=>{
    let todolist = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
    dispatch({type:'set',payload:todolist})
  },[]);

  useEffect(()=>{
    localStorage.setItem(LS_KEY,JSON.stringify(todolist))
  },[todolist]);

  return (
    <div className="todo-list">
      <Control dispatch={dispatch} />
      <Todos dispatch={dispatch} todolist={todolist} />
    </div>
  )
}

export default TodoList;
