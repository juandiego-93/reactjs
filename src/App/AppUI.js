import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateTodoButton';
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
                {loading && <p>Estamos cargando</p>}
                {error && <p> Hubo un error </p>}
                {(!loading && searchedTodos.length == 0) && <p>Crea un TODO</p>}
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