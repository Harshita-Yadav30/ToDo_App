import { useState } from 'react';
import './App.css';

let TodoItem = ({task, index, item})=>{
  let {isDone, setIsDone, toDo, setToDo} = item;
  let changeState = ()=>{
    let updatedState = [...isDone];
    updatedState[index] = !updatedState[index];
    setIsDone(updatedState);
  }

  let deleteToDo = ()=>{
    let toList = [...toDo];
    toList.splice(index, 1);
    setToDo(toList);
    let statusList = [...isDone];
    statusList.splice(index, 1);
    setIsDone(statusList);
  }

  return(
    <div className='todo-item'>
      <big className={isDone[index] ? 'isDone' : ''}>{task}</big>
      <button className='done' id={index} onClick={changeState}>&#10004;</button>
      <button className='delete' id={index} onClick={deleteToDo}>X</button>
    </div>
  )
}

function App() {
  let [toDo, setToDo] = useState([]);
  let [isDone, setIsDone] = useState([]);

  let addToDo = (evt)=>{
    evt.preventDefault();
    let task = evt.target.task.value;
    let finalData = [...toDo, task]
    setToDo(finalData);
    let finalState = [...isDone, false];
    setIsDone(finalState);
    evt.target.task.value = ''
  }

  return (
    <div className='body'>
      <h1>To-Do List</h1>

      <form className='input-class' onSubmit={addToDo} method='post'>
        <input type='text' name='task'/>
        <button>ADD</button>
      </form>

      <div className='todos'>
        {toDo.map((data, i) => {
          let itemData = {isDone, setIsDone, toDo, setToDo};
          return <TodoItem key={i} task={data} index={i} item={itemData}/>
        })}
      </div>
    </div>
  );
}

export default App;