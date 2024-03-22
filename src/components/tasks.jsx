import { Task } from './task'
import './tasks.css'

export function Tasks({ tasks, onComplete, onDelete }){

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return(
        <section className="tasks">
                <header className='topo'>

                    <div>
                        <p>Tarefas criadas</p>
                        <span>{tasksQuantity}</span>
                    </div>

                    <div>
                        <p className='textPurple'>Completas</p>
                        <span>{completedTasks} de {tasksQuantity}</span>
                    </div>

                </header>

                <div className="list">
                    {tasks.map(task => (
                        <Task 
                            key={task.id} 
                            task={task}
                            onComplete={onComplete}
                            onDelete={onDelete}
                             />
                    ))}
                </div>

        </section>
    )
}