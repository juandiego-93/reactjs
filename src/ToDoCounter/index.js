import React from 'react'
import  './TodoCounter.css';

function ToDoCounter({totalTodos, completedTodos, loading}) {
  if (totalTodos === completedTodos) {
    return <h1 className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}> Felicidades completaste todos los ToDos</h1>
  }
    return (
      <h1 className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>
        Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TO DOs
      </h1>
    );
  }

export { ToDoCounter };