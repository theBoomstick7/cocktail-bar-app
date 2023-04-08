import styles from '../Login/login.module.css'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'
import { useFormCreated } from '../../../hooks/useFormCreated'

const LoginFormKeys = {
    Email: 'email',
    Password : 'password'
}

export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext)
    const {values,errors, changeHandler,onSubmit,formValidate,canSubmit} = useFormCreated({
        [LoginFormKeys.Email] : '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit)

  
    return ( 
        <>
        
        <form id='login' onSubmit={onSubmit}>
            <div className={styles.login}>

                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    placeholder='ivan@mail.bg'
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                    onBlur={formValidate}
                />
                {errors[LoginFormKeys.Email] && 
                <p>
                    {errors[LoginFormKeys.Email]}    
                </p>}
               
                <label htmlFor="password">Password</label>
                <input type="password" 
                     placeholder='********'
                    name={LoginFormKeys.Password}
                     value={values[LoginFormKeys.Password]}
                     onChange= {changeHandler}
                     onBlur={formValidate}
                />
                 {errors[LoginFormKeys.Password] && 
                <p>
                    {errors[LoginFormKeys.Password]}    
                </p>}

              <input type='submit' value='Login'/> 
           
            </div>

        </form>
        </>


    )
}