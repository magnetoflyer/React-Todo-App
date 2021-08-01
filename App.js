import React,{useState,useEffect} from "react"
import './App.css';
import Form from "./form.js";
import TodoList from "./todo_list"
function App() {

 

  //states used in the app
  const [input_text, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const[status,setStatus]=useState("all")
  const[filteredTodos,setFilteredTodos]=useState([]);

  //useEffect
  useEffect(() => {
    
    filterHandler();
    saveLocalTodos();
    
  }, [todos,status]);

  //fuctions and events
  const filterHandler=()=>{
    switch(status){
      case 'completed': setFilteredTodos(todos.filter(todo=>todo.completed===true))
      break;

      case 'uncompleted': setFilteredTodos(todos.filter(todo=>todo.completed===false))
      break;
      default:
        setFilteredTodos(todos);
        break;
    
  }}

  const saveLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  }
  //we need to return only two kind of components,a form and a UI that represent our list
  return (
    <div className="App">
      <header>
        <h1>
          My Todo List
        </h1>
      </header>
      <Form  input_text={input_text} 
              todos={todos} 
              setTodos={setTodos} 
              setInputText={setInputText}
              setStatus={setStatus}
              filteredTodos={filteredTodos}
      />
      <TodoList  setTodos={ setTodos} 
                  todos={todos} 
                  filteredTodos={filteredTodos} 
      />
    </div>
    

  );
}

export default App;
