import './styles/global.css'
import { Header } from './components/header'
import { Tasks } from './components/tasks'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {

  const[tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    //mantém as tarefas antigas
    setTasksAndSave([
      ...tasks,
      {
        // gera um id único
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task => {
      if(task.id == taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId){
    const newsTasks = tasks.filter(task => task.id != taskId);
    setTasksAndSave(newsTasks);
    
  }

  function setTasksAndSave(newsTasks){
    setTasks(newsTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newsTasks));
  }

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  )
}

export default App
