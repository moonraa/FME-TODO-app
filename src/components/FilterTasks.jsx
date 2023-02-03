export default function FilterTasks({name, setFilter}) {
    return(
        <div>
            
            <button onClick={() => setFilter(name)}>{name}</button>
        
        </div>
    )
}