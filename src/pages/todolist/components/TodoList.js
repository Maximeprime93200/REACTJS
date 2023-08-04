import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodosContext } from './TodosApi'

export default function TodoList() {
  const { filteredTodos } = useContext(TodosContext)
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
