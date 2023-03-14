import styles from '../Login/login.module.css'

export const Login = () => {

    return ( 
        <form >
            <div className={styles.login}>

                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='ivan@mail.bg'/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='********'/>

                <button type='submit'>LOGIN</button>
           
            </div>

        </form>


    )
}