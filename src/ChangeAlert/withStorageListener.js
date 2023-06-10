import React from 'react'

export function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)

        return (
            <WrappedComponent
                show={storageChange} 
                toggleShow={setStorageChange} 
            />
        )
    }
}