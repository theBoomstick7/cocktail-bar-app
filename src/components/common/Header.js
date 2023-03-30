import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import headerStyles from "../../styles/header.module.css"
// import logo from '../../images/cocktail.jpg'

export const Header = () => {
    const {isAuthenticated,userEmail} = useContext(AuthContext)


    return( 
        <>
        <div className={headerStyles.headerDiv}>
            
                {/* <img src={logo} alt="" srcset="" /> */}
                <h1>Hub of the cocktails</h1>

                <nav>
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/cocktails'}> Cocktails</Link> </li>
                    <li><Link to={'/recipies'}> Recipies</Link> </li>
                    <li><Link to={'/blogs'}> Blogs</Link> </li>
                    {isAuthenticated && (
                        <>
                        <li><Link to={'/cocktails/create'}>Add a cocktail</Link></li>
                        <li><Link to={'/logout'}>Logout</Link></li>
                        <span>Hello, {userEmail}</span>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        </>
                    )}

                    

                </ul>

                </nav>
           
           
        </div>
        </>
    )
}