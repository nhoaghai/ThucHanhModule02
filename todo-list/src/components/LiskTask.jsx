import React from 'react'
import Task from './Task';

export default function ListTask({listTask}) {
    let elementTask = listTask.map((task,index) => {
        return <Task key={index} task={task}/>
    })
    return (
        <div className='listItems'>
            {elementTask}
        </div>
    )
}
