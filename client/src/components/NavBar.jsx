import NavLinks from './NavLinks'
import './navbar.css'

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'


const NavBar = () => {
    const {user} = useContext(UserContext)
    return(
        <div className="header">
            <p className="companyName">{user.companyName}</p>
            <NavLinks></NavLinks>
        </div>
            
    )
}

export default NavBar