import React from "react";
import "./App.css"
 
const Todo=({setTodos,todos, todo,text})=>{
    const deleteHandler=() =>{
        setTodos(todos.filter(el=>el.id!==todo.id))
        console.log(todo)
    }
    const completeHandler=({})=>{
        setTodos(todos.map((item)=>{
            if (item.id===todo.id){
                return {...item,completed:!item.completed};
            }
            console.log(todos)
            return item;
        }))
    }
    let myStyle={};

    return (
        <div className="todo">
            <li  className={`todo-item ${ todo.completed ?"completed":""}`}><span>{text}</span></li>
            <button onClick={completeHandler} className="complete_btn"><i className="fa_check"></i></button>
            <button onClick={deleteHandler} className="trash_btn"><i className="fa_trash"> </i></button>
        </div>
    );
}
export default Todo;