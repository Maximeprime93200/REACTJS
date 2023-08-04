import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodosApi from './components/TodosApi'

export default function TodoListPage() {
  return (
    <>
      <p>Todolist</p>
      <p>Petite application</p>
      <TodosApi>
        <CreateTodo />
        <TodoFilter />
        <TodoList />
      </TodosApi>
    </>
  )
}
