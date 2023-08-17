import React, { useState } from "react";
import "./Todolist.css";
import Createtask from "../model/Createtask";
import { Card, CardBody, CardHeader, Button, CardTitle } from "reactstrap";
import EditTask from "../model/Edittask";

function Todolist() {
  const [todos, setTodos] = useState([]);
  console.log("Todos:",todos);
  const [modal, setModal] = useState(false);
  const [editModel,setEditModel] = useState(false);

  const addTodo = (todo) => {
    const todoList = [...todos, todo];
    setTodos(todoList);
    setModal(false);
  };

  const handleDelete = (id)=>{
    setTodos(todos.filter((todo)=>todo.id !==id));
  }
  const toggle = () => {
    setModal(!modal);
  };
  const edittoggle = () => {
    setEditModel(!editModel);
  };

  const updateTodo = (id ,newTodo)=>{
     const newTodos = todos.map((todo)=> todo.id === id ? todo : newTodo)
    setTodos(newTodos)
  console.log("newtodo:", newTodo)
  setEditModel(true)
  }

  return (
    <>
      <div className="header text-center">
        <h1>Todolist</h1>
        <button
          className="btn btn-primary mt-4 "
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <Createtask toggle={toggle} modal={modal} addTodo={addTodo} />
      <div className="todo-container">
        {todos &&
          todos.map((todo, index) => {
            return (
              <div key={index}>
                <Card
                  className="my-2 m-2 "
                  color="primary"
                  inverse
                  style={{
                    width: "15rem",
                  }}
                >
                  <CardHeader>{todo.task}</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">{todo.description}</CardTitle>

                  </CardBody>
                  <div>
                    <Button color="success" onClick={()=>updateTodo(todo.id)}>Edit</Button>
                    <Button color="danger " onClick={()=>handleDelete(todo.id)}>Delete</Button>
                  </div>
                </Card>
                
              </div>
            );
          })}
          <EditTask editModel={editModel} edittoggle={edittoggle} updateTodo ={updateTodo} />
      </div>
    </>
  );
}

export default Todolist;
