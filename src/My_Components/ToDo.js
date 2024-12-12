import React from 'react'
import List from './List'
import './style.css'

export default function ToDo(props) {
  return (
    <div className='container marginkalya'>
        <h3 className='my-3'>ToDo-List</h3>
        {props.todo.length===0? "No List":
          props.todo.map((todo)=>{
          return <List todo ={todo} key={todo.SNo} onDelete={()=>{props.onDelete(todo)}}/>
        })}
        
        
    </div>
  )
}
