import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
  const task = props.task
  const index = props.index

  return (
    <li>{index + 1} {task.title}</li>
  )
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default TodoItem