import React from 'react'

export function useStorageListener(sincronize) {
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(()=>{
            const onChange = (change) => {
                if (change.key === 'TODOS_V1') {
                    console.log('Hubo cambios en TODOS_V1');
                    setStorageChange(true)
                    console.log(change)
                }
            }
            window.addEventListener('storage', onChange);
            return () =>{
                window.removeEventListener('storage', onChange);
            };
        }, [])
           

        function toggleShow() {
            sincronize()
            setStorageChange(false);

        }

        return {
            show: storageChange,
            toggleShow
        }
    }