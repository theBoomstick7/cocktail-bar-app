import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const UserGuard = () => {
    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated){
        return    <Navigate to='/login' />
    }

    return <Outlet />
}