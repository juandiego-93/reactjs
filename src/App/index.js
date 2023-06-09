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
      <ToDoHeader loading={loading} >
        <ToDoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
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
        onEmptySearchedResult={(searchText)=> <EmptySearch searchText={searchText}/>}
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
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

      {/* <ToDoList>
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
      </ToDoList> */}
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
