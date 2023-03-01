import React, { useState } from 'react';
import "./TodoApp.css";

function TodoForm(props) {

    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className='todo-input'
                placeholder="Add a todo"
            />

            <button type="submit" className='todo-button'>Add Todo</button>
        </form>
    );
};

export default TodoForm;
