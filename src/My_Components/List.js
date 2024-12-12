import React from 'react'

export default function List(props) {
  return (
    <div>
        <h4 className='my-3'>{props.todo.Title}</h4>
        <p>{props.todo.Description}</p>
        <button className="btn btn-sm btn-danger" onClick={props.onDelete}>Delete</button>
    </div>
  )
}
