import './TodoSearch.css'

function ToDoSearch() {
    return (
      <input 
        placeholder="Cortar cebolla"
        className="TodoSearch"
        onChange={(event)=>{
          console.log('Escribiste en el evento')
          // console.log(event);
          // console.log(event.target);
          console.log(event.target.value);
        }}
      />
    );
  }

export  { ToDoSearch };