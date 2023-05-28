import  './TodoCounter.css';

function ToDoCounter({ total, completed }) {
  if (total === completed) {
    return <h1 className='ToDoCounter'> Felicidades completaste todos los ToDos</h1>
  }
    return (
      <h1 className='ToDoCounter'>
        Has completado <span>{ completed }</span> de <span>{ total }</span> TO DOs
      </h1>
    );
  }

export { ToDoCounter };