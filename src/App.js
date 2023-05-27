import React from 'react'
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
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )
  
  console.log('los usuarios buscan todos de ' + searchValue)

  return (
    
    <>
      <ToDoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
        {searchedTodos.map(todo => (
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
