import NavLinks from './NavLinks'
import './navbar.css'

import { useContext, UseContext } from 'react'
import { UserContext } from '../context/UserProvider'


const NavBar = () => {
    const {user} = useContext(UserContext)
    return(
        <div class="header">
            <p class="companyName">{user.companyName}</p>
            <NavLinks></NavLinks>
        </div>
            
    )
}

export default NavBar