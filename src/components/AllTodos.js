import React from 'react'
import useTodo from './useTodo';
function AllTodos() {
    const { state, deleteTodo, updateTodo, completeTodo } = useTodo();

    return (
        <div className='todoList'>
            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span className={`task-text ${todo.isComplete ? 'completed-task' : ''}`} >{todo.task}</span>
                        <div className="button-group">
                            <button onClick={() => deleteTodo(todo.id)} className="delete-button">X</button>
                            <button onClick={() => updateTodo(todo.id)} className="edit-button" disabled={todo.isComplete}>EDIT</button>
                            <button onClick={() => completeTodo(todo.id)} className="complete-button">{todo.isComplete ? "COMPLETED" : "COMPLETE"}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllTodos