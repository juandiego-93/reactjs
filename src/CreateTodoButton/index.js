import React from 'react';
import './CreateTodoButton.css'
// import { TodoContext } from '../App/useTodos';

function CreateToDoButton({setOpenModal, openModal}) {
    // const  = React.useContext(TodoContext)
    return (
        <button 
            className="CreateToDoButton" 
            onClick= {() => {setOpenModal(!openModal)}}
            // console.log('le diste click')
            // console.log(event)
            // console.log(event.target)
        >+</button>
    );
}

export { CreateToDoButton };