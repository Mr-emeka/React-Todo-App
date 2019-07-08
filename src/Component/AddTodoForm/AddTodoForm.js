import React,{useState} from 'react';

function AddTodoForm ({addTodo}){
     const [text, setText] = useState("");
   
     const submitTodo = (ev)=>{
       ev.preventDefault();
   
       if(text){
         addTodo(text);
         setText("");
       }else{
         alert("A value is required!");
       }
   
     }
   
     return(
       <form onSubmit={submitTodo}>
         <label>Add a todo</label>
         <div>
           <input 
             className="todo-input"
             placeholder="Start typing"
             onChange={(ev)=>{
               setText(ev.target.value);
             }}
             value={text}
           />
           <button>Submit</button>
         </div>
       </form>
     )
   
   }

   export default AddTodoForm;