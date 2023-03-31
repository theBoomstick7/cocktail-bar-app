import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';


export const useService = (serviceFactory) => {
    debugger

    const {token} = useContext(AuthContext)

    const service = serviceFactory(token)

    return service
}