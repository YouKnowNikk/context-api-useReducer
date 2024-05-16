import { useContext } from 'react'
import { TodoContext } from './TodoContext'
//custome hook for accessing todo context
function useTodo() {
  //consume todoContext
  const todoContext = useContext(TodoContext)
  if (!todoContext) throw new Error('todo context not found')
  return (
    todoContext
  )
}

export default useTodo