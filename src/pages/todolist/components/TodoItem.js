import { useContext } from 'react'
import { TodosContext } from './TodosApi'

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodosContext)
  return (
    <li key={todo.id}>
      {todo.content}
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => dispatch({ type: 'completeTodo', id: todo.id })}
      />
      <button
        onClick={() => {
          dispatch({ type: 'deleteTodo', id: todo.id })
        }}
      >
        Done
      </button>
    </li>
  )
}
