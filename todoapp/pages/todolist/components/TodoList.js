export default function TodoList({todos, deleteTodo, completeTodo}){

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.content}

                    <input type="checkbox" 
                        checked={todo.checked} 
                        onChange={() => completeTodo(todo.id)}>
                    </input>

                    <button onClick={() => {
                        deleteTodo(todo.id)
                    }}>Done</button>     

                </li>
            ))}

        </ul>
    )
}