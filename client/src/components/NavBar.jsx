import NavLinks from './NavLinks'
import './navbar.css'

/*
PROPS
companyName : string
isAdmin: boolean
isUser : boolean NOTE: isAdmin and isUser should never be true at the same time, but may be false at the same time (not logged in)
CompanyID: Id of company, will be used for routing
*/
const NavBar = (props) => {
    console.log(props)
    return(
        <div class="header">
            <a href="#default" class="companyName">{props.children.companyName}</a>
            <NavLinks>{props.children}</NavLinks>
        </div>
            
    )
}

export default NavBar