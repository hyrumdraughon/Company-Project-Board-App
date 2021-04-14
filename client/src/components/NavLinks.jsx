import './navbar.css'

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
                <p class = "headerText">Company Page</p>
                <p class = "headerText">Profile</p>
            </div>
 
        )
    }
    if(props.children.isUser === true){
        return(
            <div class="header-right">
                <p class = "headerText">Team Page</p>
                <p class = "headerText">Profile</p>
            </div>
        )
    }

    else return(
        <div class="header-right">
            
        </div>

            
    )
}

export default NavLinks