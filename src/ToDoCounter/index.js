import React from 'react'
import { TodoContext } from './../TodoContext/index'
import  './TodoCounter.css';

function ToDoCounter() {
  const { 
    totalTodos,
    completedTodos
  } = React.useContext(TodoContext)
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