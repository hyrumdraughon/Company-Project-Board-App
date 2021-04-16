import './navbar.css'
import { Link } from 'react-router-dom';

/*
PROPS
companyName : string
isAdmin: boolean
isUser : boolean NOTE: isAdmin and isUser should never be true at the same time, but may be false at the same time (not logged in)
CompanyID: Id of company, will be used for routing
*/
/*
TODO: Links for routing
*/
const NavLinks = (props) => {
    if(props.children.isAdmin === true){
        return(
            <div class="header-right">
                <Link to='/userHome'><p class = "headerText">Company Page</p></Link>
                <Link to='/profile'><p class = "headerText">Profile</p></Link>
            </div>
 
        )
    }
    if(props.children.isUser === true){
        return(
            <div class="header-right">
                 <Link to='/userHome'><p class = "headerText">Team Page</p></Link>
                 <Link to='/profile'><p class = "headerText">Profile</p></Link>
            </div>
        )
    }

    else return(
        <div class="header-right">
            
        </div>

            
    )
}

export default NavLinks