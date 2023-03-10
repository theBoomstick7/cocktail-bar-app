
import headerStyles from "../../styles/header.module.css"
import logo from '../../images/cocktail.jpg'

export const Header = () => {



    return( 
        <>
        <div className={headerStyles.headerDiv}>
            <div className="headerDiv">
                {/* <img src={logo} alt="" srcset="" /> */}
                <h1>Hub of the cocktails</h1>

                <nav>
                <ul>
                    <li className="headerNavLi">Home</li>
                    <li className="headerNavLi">Cocktails</li>
                    <li className="headerNavLi">Recipies</li>
                    <li className="headerNavLi">Blogs</li>
                    <li className="headerNavLi">Login</li>
                    <li className="headerNavLi">Register</li>
                    <li className="headerNavLi">Logout</li>
                    

                </ul>

                </nav>
            </div>
           
        </div>
        </>
    )
}