import React from "react";

const Form = ({input_text,setInputText,todos,setTodos,setStatus})=>{
    
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    };
    const submitTodoHandler=(e) =>{
        e.preventDefault();
        setTodos([
            ...todos,{text:input_text,completed:false,id:Math.random()*1000}
        ]);
        setInputText('');
    };

    const statusHandler=(e)=>{
        setStatus(e.target.value);
    };

    return (
        <form>
            <input value={input_text} onChange={inputTextHandler}type="text" className="todo-input"/>
            <button  for="todo-input" onClick={submitTodoHandler}className='todo_button' type="submit">
                <i className="plus_square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler}name="todos" className="filter_todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};
export default Form;