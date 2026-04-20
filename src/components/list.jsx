import { use } from 'react'
import './list.css'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react'

export default function List() {
    let [ToDo, SetToDo] = useState([])
    let [NewTask, SetNewTask] = useState("")

    let addnewtodo = () => {
        event.preventDefault();
        SetToDo((prevtodo)=>{return [...ToDo, { task: NewTask , id:uuidv4() }]})
        SetNewTask("")
    }

    let updatetodo = (event) => {
        SetNewTask(event.target.value)
    }

    let remove = (id) => {
            SetToDo((prevtodo)=>prevtodo.filter((task)=>task.id !== id))
    }

    return(
        <>
        <form onSubmit={addnewtodo}>
        <hr className='head'/>  
            <div className="input">
                <input type="text" placeholder='Write your task here' value={NewTask} className='inp' onChange={updatetodo} />
                <button type="submit"> 
                    <span className='full'> Add a Task </span>
                    <span className='short'> Add </span>
                </button>
            </div>
        </form>
        <hr className='titl'/>
            <p className='listhead'>Tasks will be added down below: </p>
        <hr className='title' />
        <ul>
            {
                ToDo.map((item) => (
                  <span style={{display:'flex', flexWrap:'wrap', wordBreak: 'break-word'}}>
                    <li key={item.id} style={{ maxWidth:"40vw"  , flexWrap:'wrap', flexShrink: 0}}> {item.task} </li>
                    <button className='remove' style={{display:'inline-block'} } onClick={()=>remove(item.id)} > remove </button>
                  </span>  
                ))
            }
        </ul>
        </>
    )
}