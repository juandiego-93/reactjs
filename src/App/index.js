import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  // console.log('los usuarios buscan todos de ' + searchValue)

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;
