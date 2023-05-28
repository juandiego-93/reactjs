import './TodoList.css'

function ToDoList({children}){
    return (
    <ul className="TodoList">
      {children}
    </ul>
    );
  }

export { ToDoList };