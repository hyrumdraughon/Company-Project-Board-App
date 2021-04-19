import './navbar.css'
import { Link } from 'react-router-dom';

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'


const NavLinks = () => {
    const {user} = useContext(UserContext)
    if(user.isAdmin === true){
        return(
            <div className="header-right">
                <Link to='/userHome'><p className = "headerText">Company Page</p></Link>
                <Link to='/profile'><p className = "headerText">Profile</p></Link>
            </div>
 
        )
    }
    if(user.isUser === true){
        return(
            <div className="header-right">
                 <Link to='/userHome'><p className = "headerText">Team Page</p></Link>
                 <Link to='/profile'><p className = "headerText">Profile</p></Link>
            </div>
        )
    }

    else return(
        <div className="header-right">
            
        </div>

            
    )
}

export default NavLinks