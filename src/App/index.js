import React from 'react'
import { useTodos } from './useTodos';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateTodoButton';
import { LoadingTodos } from '../LoadingTodos';
import { ErrorTodos } from './../ErrorTodos/index.js';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
    setOpenModal,
} = useTodos()
  return (
    <>
      <ToDoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos} />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <ToDoList>
        {loading && (
          <>
            < LoadingTodos />
            < LoadingTodos />
            < LoadingTodos />
          </>
        )}
        {error && < ErrorTodos />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton
        setOpenModal={setOpenModal}
        openModal={openModal} />
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}>
          </TodoForm>
        </Modal>
      )}
    </>
  )
}

export default App;
