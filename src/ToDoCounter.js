import  './TodoCounter.css';

function ToDoCounter({ total, completed }) {
    return (
      <h1 className='ToDoCounter'>
        Has completado <span>{ completed }</span> de <span>{ total }</span> TO DOs
      </h1>
    );
  }

export { ToDoCounter };