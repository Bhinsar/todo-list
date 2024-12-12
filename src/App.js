import "./App.css";
import Header from "./My_Components/Header";
import ToDo from "./My_Components/ToDo";
import Footer from "./My_Components/Footer"
import {AddTodo}  from "./My_Components/AddTodo";
import React,{useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo

  if(localStorage.getItem("TodoList")===null){
    initTodo =[]
  }else{
    initTodo = JSON.parse(localStorage.getItem("TodoList"))
  }

  const onDelete =(todo) =>{
    // console.log("Delete button clicked",todo)
    setTodoList(TodoList.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("TodoList",JSON.stringify(TodoList))
  }

  const addTodo = (title,desc) =>{
    console.log("this is addtodo", title, desc)
    let num
    if(TodoList.length === 0){
      num = 0
    }else
      num =TodoList[TodoList.length -1].SNo+1
    const newTodo = {
      SNo: num,
      Title:title,
      Description: desc,
    }
    setTodoList([...TodoList,newTodo]) 
    
  }

  const [TodoList, setTodoList] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("TodoList",JSON.stringify(TodoList))
  
  }, [TodoList])
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ToDo todo={TodoList} onDelete={onDelete} />}
        />
        <Route
          path="/add"
          element={<AddTodo addTodo={addTodo} />}
        />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
