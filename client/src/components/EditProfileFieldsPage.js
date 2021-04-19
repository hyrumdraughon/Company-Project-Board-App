import NavBar from './NavBar'
import EditProfileFields from './EditProfileFields'

const EditProfileFieldsPage = () => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    const EditProfileProps = {userId:0}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <EditProfileFields>{EditProfileProps}</EditProfileFields>
            </div>
        </body>
        
    )
}

export default EditProfileFieldsPage