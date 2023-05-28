import './TodoSearch.css'

function ToDoSearch({
  searchValue,
  setSearchValue,
}) {
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