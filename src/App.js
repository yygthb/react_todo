import React from 'react';

import TodoList from './Components/TodoList'

function App() {

  const tasks = [
    { id: 1, completed: false, title: 'to buy bread' },
    { id: 2, completed: false, title: 'to buy milk' },
    { id: 3, completed: false, title: 'to buy fruits' },
  ]

  return (
    <div className="wrap">
      <h1>Todo List</h1>

      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
