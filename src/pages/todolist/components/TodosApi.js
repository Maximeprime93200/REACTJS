import { createContext, useEffect, useReducer, useState } from 'react'

export const TodosContext = createContext(null)

const APIUrl = 'http://localhost:8080/todos'

export const API = {
  fetch: async () => {
    const response = await fetch(APIUrl)
    return await response.json()
  },
}

export const filteredSelectorTodos = (todos, hide) =>
  hide ? todos.filter((t) => t.checked === false) : todos

export default function TodosApi({ children }) {
  const [todosState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'initTodos':
          return {
            ...state,
            todos: action.todos,
          }
        case 'addTodo': {
          const newTodo = {
            id: state.todos.length + 1,
            content: action.content,
            checked: false,
          }
          return {
            ...state,
            todos: [...state.todos, newTodo],
          }
        }
        case 'deleteTodo':
          return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.id),
          }
        case 'completeTodo':
          return {
            ...state,
            todos: state.todos.map((todo) => ({
              ...todo,
              checked: todo.id === action.id ? !todo.checked : todo.checked,
            })),
          }
        case 'switchDoneTodo':
          return {
            ...state,
            hideDoneTodo: !state.hideDoneTodo,
          }
        default:
          return state
      }
    },
    {
      todos: [],
      hideDoneTodo: false,
    }
  )

  useEffect(() => {
    async function fetchTodos() {
      const data = await API.fetch()
      dispatch({ type: 'initTodos', todos: data })
    }
    fetchTodos()
  }, [])

  const filteredTodos = todosState.hideDoneTodo
    ? todosState.todos.filter((t) => t.checked === false)
    : todosState.todos

  return (
    <TodosContext.Provider value={{ dispatch, todosState, filteredTodos }}>
      {children}
    </TodosContext.Provider>
  )
}
