import React from 'react'
// import './EmptyTodos.css'

function EmptySearch(props) {
    return (
        <p className='mt-6 font-sans text-xl'>No hay resultados para {props.searchText}</p>
    );
}

export { EmptySearch };