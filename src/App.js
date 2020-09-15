import React from 'react';
import Context from './context'

import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo';

function App() {
  const [tasks, setTask] = React.useState([
    { id: 1, completed: true, title: 'купить пианино' },
    { id: 2, completed: true, title: 'поход на Урал' },
    { id: 3, completed: false, title: 'сменить работу' },
    { id: 4, completed: false, title: 'поход на Алтай' },
  ])

  function editTask(id) {
    setTask(
      tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    )
  }

  function removeTask(id) {
    setTask(
      tasks.filter(task => task.id !== id)
    )
  }

  function createTask(title) {
    setTask(
      tasks.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="wrap">
        <h1>Todo List</h1>

        <AddTodo createTask={createTask} />
        {
          tasks.length === 0
            ? <p>Все выполнено</p>
            : <TodoList tasks={tasks} editTask={editTask} />
        }
      </div>
    </Context.Provider>
  );
}

export default App;
