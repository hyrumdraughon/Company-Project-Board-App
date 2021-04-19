import NavBar from './NavBar'
import ChangePassword from './ChangePassword'

const ChangePasswordPage = () => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <ChangePassword></ChangePassword>
            </div>
        </body>
        
    )
}

export default ChangePasswordPage