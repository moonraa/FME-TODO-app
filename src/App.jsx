import { useState, useEffect } from 'react'
import './App.css'
import EnterToDo from './components/EnterToDo'
import ToDoList from './components/ToDoList'
import FilterTasks from './components/FilterTasks'


function App() {

  const [todos, setToDos] = useState([])
  const [filter, setFilter] = useState('All')

  const Filter_Map = {
    All : () => true,
    active: () => todos.active,
    completed: () => !todos.completed
  };

  const Filter_Names = Object.keys(Filter_Map);

  useEffect(() => {
    console.log('effectran')
    console.log(todos)
    console.log(Filter_Map[filter])
    console.log(todos.filter(Filter_Map[filter]))
    
  }, [todos, filter])
  
    const Filtered = Filter_Names.map(item => <FilterTasks name={item} setFilter={setFilter}/>)
  
    const ToDoElements = todos
                        .filter(Filter_Map[filter])
                        .map(oldToDo => 
                                      <ToDoList taskObj={oldToDo} 
                                      key={oldToDo.id} setToDos={setToDos}/>)

  return (
    <div className="App">
      <EnterToDo setToDos={setToDos}/>
      {ToDoElements}
      {Filtered}
    </div>
  )
}

export default App
