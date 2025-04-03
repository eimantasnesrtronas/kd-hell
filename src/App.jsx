import{useEffect, useState} from'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Task from './components/Task'
import New_task from './components/New_task'

function App() {
  
  const[tasks, setTask] = useState(
    JSON.parse(localStorage.getItem('tasks')) ||[]
  );

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);

  return (
    <>
    <Navbar/>
    {/* <Hero/> */}

    <New_task setTasks={setTask} />
    <Task tasks={tasks} setTasks={setTask} />
    

    </>
  )
}

export default App
