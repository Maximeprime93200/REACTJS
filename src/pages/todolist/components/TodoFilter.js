import { useContext } from 'react'
import { TodosContext } from './TodosApi'

export default function TodoFilter() {
  const { todosState, dispatch } = useContext(TodosContext)
  function handleOnChange() {
    dispatch({ type: 'switchDoneTodo' })
  }

  return (
    <div>
      <label>Filtre de résultat</label>
      <input
        type="checkbox"
        checked={todosState.hideDoneTodo}
        onChange={handleOnChange}
      />
    </div>
  )
}
