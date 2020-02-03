import React,{Component,useRef,useEffect,useState,memo,useMemo,useCallback} from 'react';
import './todo.css'

let idSeq=Date.now()
const LS_KEY='$-todos_'

function Control(props){
  const { addTodo}=props
  const inputRef=useRef()
  const onSubmit=(e)=>{
    e.preventDefault();
    let newText=inputRef.current.value.trim()
    if(newText.length==0){
      return ;
    }
    addTodo({
      id:++idSeq,
      text:newText,
      complete:false
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
}

function TodoItem(props){
  const {
    todo:{
      id,
      text,
      complete
    },
    toggleTodo,
    removeTodo
  } = props
  const onChange=()=>{
    toggleTodo(id)
  }
  const onRemove=()=>{
    removeTodo(id)
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
}

function Todos(props){
  const {todolist,toggleTodo,removeTodo} = props
  return (
    <ul>
    {
      todolist.map(item=>{
        return (
          <TodoItem
           key={item.id}
           todo={item}
           toggleTodo={toggleTodo}
           removeTodo={removeTodo}
           />)
      })
    }
    </ul>
  )
}

function TodoList() {
  const [todolist,setTodos]=useState([])

  const addTodo=useCallback((todo)=>{
    setTodos(todolist=>[...todolist,todo])
  },[])
  const removeTodo=useCallback((id)=>{
    setTodos(todolist=>todolist.filter(item=>{
      return item.id!==id
    }))
  },[])
  const toggleTodo=useCallback((id)=>{
    setTodos(todolist=>todolist.map(item=>{
      return item.id===id?{...item,complete:!item.complete}:item
    }))
  },[])

  //注意两个useEffect的顺序
  useEffect(()=>{
    let todolist = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
    setTodos(todolist)
  },[]);

  useEffect(()=>{
    localStorage.setItem(LS_KEY,JSON.stringify(todolist))
  },[todolist]);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todolist={todolist} />
    </div>
  )
}

export default TodoList;
