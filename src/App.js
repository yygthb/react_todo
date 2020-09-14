import React from 'react';

import TodoList from './Components/TodoList'

function App() {
  const [tasks, setTask] = React.useState([
    { id: 1, completed: false, title: 'to buy bread' },
    { id: 2, completed: true, title: 'to buy milk' },
    { id: 3, completed: false, title: 'to buy fruits' },
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

  return (
    <div className="wrap">
      <h1>Todo List</h1>

      <TodoList tasks={tasks} editTask={editTask} />
    </div>
  );
}

export default App;
