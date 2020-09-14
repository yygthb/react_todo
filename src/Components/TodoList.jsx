import React from 'react'

// import './TodoList.css'
import style from './TodoList.module.scss'

import TodoItem from './TodoItem'

function TodoList(props) {
  const tasks = props.tasks

  return (
    <ul>
      {
        tasks.map((task, index) => {
          return <TodoItem key={task.id} task={task} index={index} editTask={props.editTask} />
        })
      }
    </ul>
  )
}

export default TodoList