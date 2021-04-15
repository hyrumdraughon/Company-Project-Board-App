import NavBar from './NavBar'
import ViewProfile from './ViewProfile'

const ViewProfilePage = () => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <ViewProfile>{0}</ViewProfile>
            </div>
        </body>
        
    )
}

export default ViewProfilePage