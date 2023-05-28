import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { TodoItem } from '../TodoItem';
import { CreateToDoButton } from '../CreateTodoButton';
function AppUI({
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