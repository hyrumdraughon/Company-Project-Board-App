import './profile.css'
import EditProfileFields from './EditProfileFieldsPage'
import NavBar from "./NavBar"

//PROPS
/*
{
    userId: integer that contains the id of the user
}
*/
const EditProfileFieldsPage = (props) => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <EditProfileFields>{0}</EditProfileFields>
            </div>
        </body>
    )
}

export default EditProfileFieldsPage