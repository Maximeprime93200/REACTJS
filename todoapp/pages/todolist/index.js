import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

export default function TodoListPage(){

    const [todos, setTodos] = useState([])
    const [hideDoneTodo, setHideDoneTodo] = useState(false)

    function addTodo(content){
        setTodos(s => {
            const newTodo = { id : s.length + 1, content, checked: false }
            return [...s, newTodo]
        })
    }

    function deleteTodo(id){
        setTodos(_todos => _todos.filter(todo => todo.id !== id))
    }

    function completeTodo(id){
        setTodos(_todos => _todos.map(todo => ({
            ...todo,
            checked: todo.id === id ? !todo.checked : todo.checked
            })
        ))
    }

    const filteredTodos = hideDoneTodo ? todos.filter(t => t.checked === false) : todos

    return (
        <>
            <p>TodoList</p>
            <CreateTodo createTodo={addTodo}/>
            <TodoFilter hideDoneTodo={hideDoneTodo} setHideDoneTodo={setHideDoneTodo}/>
            <TodoList todos={filteredTodos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        </>
    )
}