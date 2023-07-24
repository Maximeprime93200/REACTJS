import { useState } from "react"

export default function CreateTodo({ createTodo }){
    const [todoContent, setTodoContent] = useState('')

    function handleOnSubmit(event) {
        event.preventDefault()
        createTodo(todoContent) 
        setTodoContent('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Quoi de beau aujourd'hui ?</label>
            <input type="text" value={todoContent} onChange={(event) => {
                setTodoContent(event.target.value)
            }}></input>
            <button type="submit">Submit</button>
        </form>
    )
}