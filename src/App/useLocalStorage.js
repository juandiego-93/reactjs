import React from 'react'

function useLocalStorage(itemName, initialValue) {
  
  const [sincronizedItem, setSincronizedItem] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
    
        setLoading(false);
        setSincronizedItem(true)
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 1000)
  },[sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };

  function sincronizeItem() {
    setLoading(true);
    setSincronizedItem(false)
  }

  // console.log(item)

  return {
    item, 
    saveItem, 
    loading, 
    error,
    sincronizeItem
  }
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Armar un bate', completed: false},
//   { text: 'Dibujar', completed: false},
//   { text: 'jugar osrs', completed: false},
// ]

// let stringyfiedTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1',stringyfiedTodos)
