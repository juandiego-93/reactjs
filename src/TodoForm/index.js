import React from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal,}){

    const[newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit =(event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }
    const onCancel = (event) =>{
        event.preventDefault();
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo ToDo</label>
            <textarea
                placeholder='Cortar cebolla para comer y no morir de hambre'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button TodoForm-button--cancel'
                    type='button'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };