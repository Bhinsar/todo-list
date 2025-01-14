import React from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const submit =(e)=>{
    e.preventDefault()
    if(!title || !desc){
      alert("Title and description cannot be blank")
    }else{
      props.addTodo(title,desc)
      setTitle("")
      setDesc("")
    }
  }
  return (
    <div className='container my-3'>
    <h3>Add A ToDO</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Add Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add +</button>
        </form>
    </div>
  )
}
