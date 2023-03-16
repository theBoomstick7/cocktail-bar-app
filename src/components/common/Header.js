import { Link } from "react-router-dom"


import headerStyles from "../../styles/header.module.css"
// import logo from '../../images/cocktail.jpg'

export const Header = () => {



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
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                    <li><Link to={'/logout'}>Logout</Link></li>
                    <li><Link to={'/cocktails/create'}>Add a cocktail</Link></li>

                    

                </ul>

                </nav>
           
           
        </div>
        </>
    )
}