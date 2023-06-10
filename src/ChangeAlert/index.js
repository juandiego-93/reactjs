import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className='flex items-center'>

            <p className='m-3'>Hubo cambios</p>
            <button 
                onClick={() => toggleShow(false)}
                className='bg-green-500 w-20 h-10 rounded-lg text-white ml-3 mt-3'
            >
                Refresh
            </button>
            </div>
        )
    } else {
        return null
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


