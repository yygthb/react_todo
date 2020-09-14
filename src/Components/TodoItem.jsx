import React from 'react'

// import  './TodoItem.module.scss'
import style from './TodoItem.module.scss'

// function editTask (task) {
//   console.log(task.id)
// }

function TodoItem(props) {
  const task = props.task
  const index = props.index

  return (
    <li>
      <span className={task.completed ? style.done : ''}>
        <input 
          type="checkbox"
          checked={task.completed}
          onChange={() => props.editTask(task.id)}
          />
        <strong>{index + 1}</strong> {task.title}
      </span>
      <button>&times;</button>
    </li>
  )
}

export default TodoItem