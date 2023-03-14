import styles from '../Register/register.module.css'

export const Register = () => {

    return ( 
        <form >
            <div className={styles.register}>

            <h1>REGISTER PAGE</h1>
        
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='ivan@mail.bg'/>
        
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='IvanTheBartender'/>

            
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='********'/>

            <label htmlFor="repass">Repeat Password</label>
            <input type="password" placeholder='********'/>

            <button type='submit'>REGISTER</button>
            </div>
        </form>
    )
}