import { useEffect, useState } from "react"

export default function Tasks({tasks, setTasks}){
    
    const [search_query, set_search_query ] = useState('');
    const [results, set_results] = useState([]);

        useEffect(() => {    
                set_results(() => {
                    return tasks.filter((task) => (task.task.includes(search_query)));
                });
        }, [search_query, tasks]);
    

    function onChecked(task){
        setTasks((oldTasks) => {
            return oldTasks.map((oldTask) => {
                if(oldTask.id == task.id){
                    return{
                        id: oldTask.id,
                        task: oldTask.task,
                        done: !oldTask.done
                    }
                }else{
                    return oldTask
                }
            })
        })
    }

    function  remove(task_to_remove){
        setTasks((oldTask) =>{
            return oldTask.filter((oldTask)=>(
                oldTask.id !== task_to_remove.id
            ))
        })
    }
    return(
        <>
        <input 
                type="text" placeholder="Search" className="input block" value={search_query} onChange={(event) => {set_search_query (event.target.value) }}
            />
            <ul>
                {results.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" className="checkbox m-2" checked={task.done} onChange={() =>  onChecked(task)
                            
                        }/>
                        {task.task}
                        <button className="btn btn-error " onClick={() => {
                            remove(task)
                        }}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}