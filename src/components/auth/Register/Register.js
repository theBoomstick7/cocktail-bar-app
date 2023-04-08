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

    const {values,errors,changeHandler,onSubmit,formValidate} = useFormCreated({
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
            <input type="email" name={registerFormKeys.Email} onChange={changeHandler} value={values[registerFormKeys.Email]} onBlur={formValidate}  placeholder='ivan@mail.bg'/>
                {errors[registerFormKeys.Email] && 
                    <p>
                        {errors[registerFormKeys.Email]}    
                    </p>}

            <label htmlFor="username">Username</label>
            <input type="text" name={registerFormKeys.Username} onChange={changeHandler} value={values[registerFormKeys.Username]} onBlur={formValidate} placeholder='IvanTheBartender'/>
                {errors[registerFormKeys.Username] && 
                    <p>
                        {errors[registerFormKeys.Username]}    
                    </p>}
            
            <label htmlFor="password">Password</label>
            <input type="password" name={registerFormKeys.Password} onChange={changeHandler} value={values[registerFormKeys.Password]} onBlur={formValidate} placeholder='********'/>
                    
                {errors[registerFormKeys.Password] && 
                    <p>
                        {errors[registerFormKeys.Password]}    
                    </p>}
            <label htmlFor="repass">Repeat Password</label>
            <input type="password" name={registerFormKeys.RePass} onChange={changeHandler} value={values[registerFormKeys.RePass]} onBlur={formValidate} placeholder='********'/>
                {errors[registerFormKeys.RePass] && 
                    <p>
                        {errors[registerFormKeys.RePass]}    
                    </p>}
                   
                 
                    <button  type='submit'>REGISTER</button>
                    
                   
            </div>
        </form>
    )
}