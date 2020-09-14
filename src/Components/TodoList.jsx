import React from 'react'
import PropTypes from 'prop-types'

// import './TodoList.css'
import style from './TodoList.module.scss'

import TodoItem from './TodoItem'

function TodoList(props) {
  const tasks = props.tasks

  return (
    <ul>
      {
        tasks.map((task, index) => {
          return <TodoItem key={task.id} task={task} index={index} />
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  // tasks: PropTypes.array
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList