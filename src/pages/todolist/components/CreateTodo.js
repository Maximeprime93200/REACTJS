import { useContext, useState } from 'react'
import { TodosContext } from './TodosApi'

export default function CreateTodo() {
  const [todoContent, setTodoContent] = useState('')
  const { dispatch } = useContext(TodosContext)

  function handleOnSubmit(event) {
    event.preventDefault()
    dispatch({ type: 'addTodo', content: todoContent })
    setTodoContent('')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Quoi de beau aujourd'hui ?</label>
      <input
        type="text"
        value={todoContent}
        onChange={(event) => {
          setTodoContent(event.target.value)
        }}
      />
      <button type="submit">Créer</button>
    </form>
  )
}
