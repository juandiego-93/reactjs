import React from 'react'
import  './TodoCounter.css';

function ToDoCounter({totalTodos, completedTodos}) {
  if (totalTodos === completedTodos) {
    return <h1 className='ToDoCounter'> Felicidades completaste todos los ToDos</h1>
  }
    return (
      <h1 className='ToDoCounter'>
        Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TO DOs
      </h1>
    );
  }

export { ToDoCounter };