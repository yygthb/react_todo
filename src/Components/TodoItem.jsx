import React, { useContext } from 'react'
import Context from '../context'

// import  './TodoItem.module.scss'
import style from './TodoItem.module.scss'

// function editTask (task) {
//   console.log(task.id)
// }

function TodoItem(props) {
  const task = props.task
  const index = props.index
  const { removeTask } = useContext(Context)

  return (
    <li>
      <span className={task.completed ? style.done : ''}>
        <input
          type="checkbox"
          id={`c${task.id}`}
          checked={task.completed}
          onChange={() => props.editTask(task.id)}
        />
        <label></label>
        <strong>{index + 1}</strong> {task.title}
      </span>
      <button onClick={() => removeTask(task.id)}>&times;</button>
    </li>
  )
}

export default TodoItem