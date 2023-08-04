import { render, fireEvent, screen } from '@testing-library/react'
import TodoListPage from './TodoListPage'

test('it should add a todo', () => {
  render(<TodoListPage />)

  const input = screen.getByPlaceholderText('Add todo...')
  fireEvent.change(input, { target: { value: 'New todo' } })
  fireEvent.click(screen.getByText('Add'))

  expect(screen.getByText('New todo')).toBeInTheDocument()
})

test('it should delete a todo', () => {
  render(<TodoListPage />)

  const input = screen.getByPlaceholderText('Add todo...')
  fireEvent.change(input, { target: { value: 'New todo' } })
  fireEvent.click(screen.getByText('Add'))

  fireEvent.click(screen.getByText('Delete'))
  expect(screen.queryByText('New todo')).toBeNull()
})

test('it should mark a todo as complete', () => {
  render(<TodoListPage />)

  const input = screen.getByPlaceholderText('Add todo...')
  fireEvent.change(input, { target: { value: 'New todo' } })
  fireEvent.click(screen.getByText('Add'))

  fireEvent.click(screen.getByText('Complete'))
  const todoElement = screen.getByText('New todo')
  expect(todoElement).toHaveClass('completed')
})
