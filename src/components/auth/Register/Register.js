import styles from '../Register/register.module.css'
import { useContext } from 'react'
import { useFormCreated } from '../../../hooks/useFormCreated'
import { AuthContext } from '../../../contexts/AuthContext'

export const Register = () => {
    const registerFormKeys = {
        Email: 'email',
        Username : 'username',
        Password : 'password',
        RePass : 'repass'
    }
    
    const {onRegisterSubmit} = useContext(AuthContext)

    const {values,changeHandler,onSubmit} = useFormCreated({
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
            <input type="email" name={registerFormKeys.Email} onChange={changeHandler} value={values[registerFormKeys.Email]}  placeholder='ivan@mail.bg'/>
        
            <label htmlFor="username">Username</label>
            <input type="text" name={registerFormKeys.Username} onChange={changeHandler} value={values[registerFormKeys.Username]} placeholder='IvanTheBartender'/>

            
            <label htmlFor="password">Password</label>
            <input type="password" name={registerFormKeys.Password} onChange={changeHandler} value={values[registerFormKeys.Password]} placeholder='********'/>

            <label htmlFor="repass">Repeat Password</label>
            <input type="password" name={registerFormKeys.RePass} onChange={changeHandler} value={values[registerFormKeys.RePass]} placeholder='********'/>

            <button type='submit'>REGISTER</button>
            </div>
        </form>
    )
}