import { nanoid } from "nanoid"

export default function EnterToDo({setToDos}){
    function addToDos(event){
        if(event.key === 'Enter' && event.target.value !== ''){
            const text = event.target.value
            setToDos(oldTodo => 
                [...oldTodo, 
                {task: text, active: true, completed: false, id: nanoid()}       
            ])
            event.target.value = ''
        }
    }

    return(
        <div>
            <h1>TODO</h1>
            <input type="text" placeholder="Add Item..."
             onKeyDown={(event) => addToDos(event)}/>
        </div>
    )
}