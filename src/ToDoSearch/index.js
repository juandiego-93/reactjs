import React from 'react';
import './TodoSearch.css'

function ToDoSearch({searchValue, setSearchValue, loading}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };