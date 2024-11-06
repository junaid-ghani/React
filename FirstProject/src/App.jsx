import { useState } from "react";
import Nav from "./Navbar";
import "./CustomApp.css";


function App() {

  let [counter,setCounter] =  useState(0)

  function AddCounterValue() {
    if (counter < 10 ) {
      setCounter(counter+1)
    }
  }


  function removeCounterValue() { 
    if (counter > 0 ) {      
      setCounter(counter-1)
    }
  }

  // To-do Task

  // const [task,setTask] = useState('')
  // console.log(task);
  
  // const [tasks,setTasks] = useState([])

  // const addTask = () => {
  //   if (task.trim()) {
  //     setTasks([tasks,{text:task,completed:false}])
  //     setTask('');     
  //   }

  // }

  // const toggleTaskCompletion = (index) => {
  //   const updatedTasks = tasks.map((t, i) => i === index ? { t, completed: !t.completed } : t );
  //   setTasks(updatedTasks);
  // };

  // const deleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // };

  return (  
    <>
      <Nav />
      <h2>Hello World</h2>
      <h3>Value : {counter}</h3>
      <button onClick={AddCounterValue} >Increament No </button>
      <br />
      <br />
      <button onClick={removeCounterValue}>Decreament No </button>
      {/* <div className="To_Do">
        <h1>React To-Do List</h1>
        <input type="text" placeholder="Add a new task..." value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <br />
        <ul>
        {
          tasks.map((t, index) => (
              <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}> {t.text}
                <button onClick={() => toggleTaskCompletion(index)}>
                  {t.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))
        }
        </ul>
      </div> */}

    </>
  )
}

export default App
