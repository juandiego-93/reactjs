import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateTodoButton';
import { LoadingTodos } from '../LoadingTodos';
import { ErrorTodos } from './../ErrorTodos/index.js';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';



function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>
                {loading && (
                    <>
                        < LoadingTodos />
                        < LoadingTodos />
                        < LoadingTodos />
                    </>
                )
                }
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
            <CreateToDoButton />
            {openModal && (
                <Modal>
                    La funcionalidad de agregar ToDos
                </Modal>
            )}
        </>
    )
}

export { AppUI }   