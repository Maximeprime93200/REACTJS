export default function TodoFilter({setHideDoneTodo, HideDoneTodo}){

    function handleOnChange(){
        setHideDoneTodo(h => !h)
    }

    return (
        <div>
            <label>Filtre de résultat </label>
            <input type="checkbox" 
                checked={HideDoneTodo} 
                onChange={handleOnChange}/>
        </div>
    )
}