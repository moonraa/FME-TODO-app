export default function ToDoList({taskObj, setToDos}){
    function deletebtn(task){
        setToDos( oldToDos => oldToDos.filter(oldToDo => oldToDo.id !== task.id))
    }

    function taskFinished(task){
        setToDos(oldToDos => oldToDos.map(oldToDo => oldToDo.id === task.id 
            ? {...oldToDo, active: !task.active, completed: !task.completed} 
            : oldToDo))
    }

    return(
        <div className="todoList">
          <button onClick={() => taskFinished(taskObj)}>done</button>  <li>{taskObj.task}  </li> 
          <img src="./public/icon-cross.svg" onClick={() => deletebtn(taskObj)} />
        </div>
    )
}