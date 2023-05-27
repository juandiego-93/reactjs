import React, { useState } from 'react';
import './TodoSearch.css'

function ToDoSearch() {
  const [searchValue, setSearchValue] = React.useState();
  useState('')
  
  console.log('los usuarios buscan todos de ' + searchValue)

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        // console.log('Escribiste en el evento')
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };