import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { TodoItem } from './TodoItem';
import { CreateToDoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Armar un bate', completed: false},
  { text: 'Dibujar', completed: false},
  { text: 'jugar osrs', completed: false},
]

function App() {
  return (
    <>
      <ToDoCounter completed={16} total={25}/>
      <ToDoSearch />

      <ToDoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed= {todo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}



export default App;
