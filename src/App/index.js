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
import { EmptySearch } from '../EmptySearch';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';
import { ToDoHeader } from '../ToDoHeader';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
    completeTodo,
    deleteTodo,
    setSearchValue,
    addTodo, 
    setOpenModal,
    sincronizeTodos
} = useTodos()
  return (
    <>
      <ToDoHeader loading={loading} >
        <ToDoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <ErrorTodos />}
        onLoading={() => <LoadingTodos /> }
        onEmpty={() => <EmptyTodos />}
        onEmptySearchedResult={(searchText)=> <EmptySearch searchText={searchText}/>}>
      {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </ToDoList>
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}>
          </TodoForm>
        </Modal>
      )}
      <CreateToDoButton
        setOpenModal={setOpenModal}
        openModal={openModal} />
      <ChangeAlert 
        sincronize= {sincronizeTodos}
      />
    </>
  )
}

export default App;
