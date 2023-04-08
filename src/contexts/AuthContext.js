import { createContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage';

import {authServiceFactory} from '../services/authService'

export const AuthContext = createContext();
 
export const AuthProvider = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth && auth.accessToken);
    const navigate = useNavigate();


    const onRegisterSubmit = async(values) =>{
      console.log(values);
        const {repass, ...registerData} = values
        console.log(repass);
        if(repass !== registerData.password) {
          alert('Passwords don`t match')
          return
        }
  
        try {
          const result = await authService.register(registerData)
          setAuth(result)
  
          navigate('/')
        } catch (error) {
          console.log(error)
          throw new Error(error.message)
        }
      }

      const onLoginSubmit = async (data) => {
        try {
          const result =  await authService.login(data)
          setAuth(result)
          
          navigate('/')
        } catch (error) {
          throw new Error(error.message)
        }
        
    }


    const onLogout = async () =>{
        
        //await logout from service
        setAuth({})
        await authService.logout()

        
      };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token : auth.accessToken,
        userEmail : auth.email,
        username: auth.username,
        isAuthenticated : !!auth.accessToken,
      }

    return (
        <>
            <AuthContext.Provider value={context}>
                    {children}
            </AuthContext.Provider>
        </>
    )
}