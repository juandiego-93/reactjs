import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ToDoList>

      {/* <CreateToDoButton /> */}

    </div>
  );
}



export default App;
