import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialised = localStorage.getItem(key)
        if (persistedStateSerialised) {

            const persistedState = JSON.parse(persistedStateSerialised)
            
            return(persistedState)
        }

        return initialValue
    })

  
    const setLocalStorageState = (value) => {
        setState(value)

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState
    ]
}