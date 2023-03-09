import Image from 'react-bootstrap/Image'
import logo from '../images/cocktail.jpg'

import styles from '../styles/header.module.css'


export const Header = () => {



    return( 
        <>
        <div>
            <img src={logo} alt="" srcset="" />
            <h1>Hub of the cocktails</h1>

            <nav className="headerNav">
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
        </>
    )
}