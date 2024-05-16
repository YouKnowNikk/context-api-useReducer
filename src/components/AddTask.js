import React, { useEffect, useState } from 'react'
import useTodo from './useTodo';
function Addtask() {
    const [task, setTask] = useState('');
    const { addTodo, editTodo, state } = useTodo();
    const [error, setError] = useState(false)
    const HandleSubmit = () => {
        if (state.toUpdate) {
            editTodo({ id: state.toUpdate.id, task: task })
        }
        else {
            if (task.trim() === "") {
                setError(true);
            }
            else {
                addTodo({ id: Date.now(), task, isComplete: false });
                setError(false)
            }

        }
        setTask('');
    }
    useEffect(() => {
        if (state.toUpdate) {
            setTask(state.toUpdate.task)
        }
    }, [state.toUpdate])

    return (
        <div className='addtask'>
            <input type='text' onChange={(e) => { setTask(e.target.value); setError(false); }} value={task} className='input' placeholder='enter your daily tasks' />
            <button className='addButton' onClick={HandleSubmit}>{state.toUpdate ? 'Save Todo' : 'ADD TODO'}</button>
            {error && <p style={{ color: "red", width: "90%", margin: "0 auto", textAlign: 'center' }}>Please write your task</p>}
        </div>
    )
}

export default Addtask