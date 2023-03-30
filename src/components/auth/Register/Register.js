import styles from '../Register/register.module.css'
import { useContext } from 'react'
import { useForm } from '../../../hooks/useForm'
import { AuthContext } from '../../../contexts/AuthContext'

export const Register = () => {
    const registerFormKeys = {
        Email: 'email',
        Username : 'username',
        Password : 'password',
        RePass : 'repass'
    }
    
    const {onRegisterSubmit} = useContext(AuthContext)

    const {values,changeHandler,onSubmit} = useForm({
        [registerFormKeys.Email]: '',
        [registerFormKeys.Username]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.RePass]: '',
    },onRegisterSubmit)




    return ( 
        <form onSubmit={onSubmit}>
            <div className={styles.register}>

            <h1>REGISTER PAGE</h1>
        
            <label htmlFor="email">Email:</label>
            <input type="email" name={registerFormKeys.Email} onChange={changeHandler} placeholder='ivan@mail.bg'/>
        
            <label htmlFor="username">Username</label>
            <input type="text" name={registerFormKeys.Username} onChange={changeHandler} placeholder='IvanTheBartender'/>

            
            <label htmlFor="password">Password</label>
            <input type="password" name={registerFormKeys.Password} onChange={changeHandler} placeholder='********'/>

            <label htmlFor="repass">Repeat Password</label>
            <input type="password" name={registerFormKeys.RePass} onChange={changeHandler} placeholder='********'/>

            <button type='submit'>REGISTER</button>
            </div>
        </form>
    )
}