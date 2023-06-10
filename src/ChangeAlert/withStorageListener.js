import React from 'react'

export function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
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
            props.sincronize()
            setStorageChange(false);

        }

        return (
            <WrappedComponent
                show={storageChange} 
                toggleShow={toggleShow} 
            />
        )
    }
}