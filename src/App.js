import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './Component/AddTodoForm/AddTodoForm';

function App (){
  const [todos, setTodos] = useState([{
    text:"buy groceries",
    isDone: false
  },{
    text:"Go to the gym",
    isDone: false
  },{
    text:"Pay credit card bill",
    isDone: false
  }
  ,{
    text:"Rent a car",
    isDone: false
  }
  ,{
    text:"Study chemistry",
    isDone: false
  }
]);

  const addTodo = (text)=>{
    setTodos([...todos, {text}]);
  }
  const toggleTodoStatus = (payload)=>{
    const { status, index } = payload;
    const myNewTodos = [...todos];
    myNewTodos[index].isDone = status;
    setTodos(myNewTodos);

  }
  return (
    <div className="app">
    <h1>Todo list</h1>
    <AddTodoForm addTodo={addTodo}/>
    { 
      todos.map((todo, index)=>{
        const { text, isDone } = todo;
        const btnText = isDone ? "Undo" : "Done";
        return(
          <div key={index} className="list-item">
            <span className={isDone ? "strike-through" : ""}>
              {text}
            </span>
            <button 
              className={`status-btn ${isDone ? "done" : ""}`} 
              onClick={
               ()=>toggleTodoStatus({status:!isDone, index})
               }
              >
              {btnText}
            </button>
            
          </div>
        )
      })
    }
    </div>
  );
}

export default App;