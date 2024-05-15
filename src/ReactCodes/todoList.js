import React, { useState } from 'react';

export const TodoList = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() === '') return; // Don't add empty todos
        setTodoItems([...todoItems, newTodo]);
        setNewTodo(''); // Clear input after adding todo
    };

    const handleDelete = (index) => {
        const updatedTodos = [...todoItems];
        updatedTodos.splice(index, 1);
        setTodoItems(updatedTodos);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='add todo'
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todoItems.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
