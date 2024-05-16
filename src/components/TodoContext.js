import React, { createContext, useEffect, useReducer } from 'react'

//Create a context without initial states
export const TodoContext = createContext();

//create a todoProvider
function TodoContextProvider({ children }) {

    //initialize a state for managening todos
    const initialState = {
        todos: JSON.parse(localStorage.getItem('todos')),
        toUpdate: null
    }

    //manage complex state with useReducer
    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'addTodo': {
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            }
            case 'delete': {
                return {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.payload)
                }
            }
            case 'update': {
                const updatedTodo = state.todos.find((todo) => todo.id === action.payload)
                return {
                    ...state,
                    toUpdate: updatedTodo
                }
            }

            case 'edit': {
                const updatedTodos = state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                );
                return { ...state, todos: updatedTodos, toUpdate: null };
            }

            case 'complete': {
                const updatedTodos = state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, isComplete: true } : todo
                );
                return { ...state, todos: updatedTodos };
            }

            default:
                return state;

        }
    }
    const [state, dispatch] = useReducer(todoReducer, initialState);
    useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(state.todos));


        } catch (error) {
            // Handle error gracefully, like logging or showing a message to the user
            console.error('Error saving todos to local storage:', error);
        }
    }, [state.todos]);


    //All actions with dispatch
    const addTodo = todo => dispatch({ type: 'addTodo', payload: todo });
    const deleteTodo = id => dispatch({ type: 'delete', payload: id });
    const updateTodo = id => dispatch({ type: 'update', payload: id });
    const editTodo = todo => dispatch({ type: 'edit', payload: todo });
    const completeTodo = id => dispatch({ type: 'complete', payload: id });
    return (
        <TodoContext.Provider value={{ state, addTodo, deleteTodo, updateTodo, editTodo, completeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider