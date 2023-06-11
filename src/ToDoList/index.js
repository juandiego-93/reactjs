import './TodoList.css'

function ToDoList(props){
  const renderFunc = props.children || props.render

    return (
      <section className='TodoList-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        
        {(!props.loading && !props.totalTodos) && props.onEmpty()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResult(props.searchText)}

        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

      </section>
    );
  }

export { ToDoList };