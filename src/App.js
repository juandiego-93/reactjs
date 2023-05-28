import React from 'react'
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { TodoItem } from './TodoItem';
import { CreateToDoButton } from './CreateTodoButton';



// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Armar un bate', completed: false},
//   { text: 'Dibujar', completed: false},
//   { text: 'jugar osrs', completed: false},
// ]

// let stringyfiedTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1',stringyfiedTodos)
// localStorage.removeItem('TODOS_V1')

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos; 

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
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
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}



export default App;
