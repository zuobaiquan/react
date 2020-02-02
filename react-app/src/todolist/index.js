import React,{Component,useRef,useState,memo,useMemo,useCallback} from 'react';
import './todo.css'

let idSeq=Date.now()

function Control(props){
  const { addTodo}=props

  const inputRef=useRef()

  const onSubmit=(e)=>{
    e.preventDefault();
    const newText=inputRef.current.value.trim()
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
          className="new-todo"
          placeholder="what needs to be done ?"
        />
      </form>
    </div>
  )
}

function Todos(){
  
  return <div>Todos</div>
}

function TodoList() {
  const [todos,setTodos]=useState([])

  const addTodo=useCallback((todo)=>{
    setTodos(todos=>[...todos,todo])
  },[])
  const removeTodo=useCallback((id)=>{
    setTodos(todos=>todos.filter(item=>{
      return item.id!==id
    }))
  },[])
  const toggleTodo=useCallback((id)=>{
    setTodos(todos=>todos.map(item=>{
      return item.id===id?{...item,complete:!item.complete}:item
    }))
  },[])

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  )
}

export default TodoList;
