import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateTodoButton';
import { LoadingTodos } from '../LoadingTodos';
import { ErrorTodos } from './../ErrorTodos/index.js';
import { EmptyTodos } from '../EmptyTodos';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
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
        </>
    )
}

export { AppUI }   