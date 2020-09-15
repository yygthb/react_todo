import React from 'react'

import style from './AddTodo.module.scss'

export default function AddTodo(props) {
  const [value, setValue] = React.useState('')
  const createTask = props.createTask

  function submitTask(event) {
    event.preventDefault()

    if (value.trim()) {
      createTask(value)
    }

    setValue('')
  }

  return (
    <div className={style.new_task}>
      <form className={style} onSubmit={submitTask} >
        <span>
          <label>Новая Задача:</label>
          <input value={value} onChange={event => setValue(event.target.value)} />
        </span>
        <button type="submit">Добавить</button>
      </form>
    </div>
  )
}