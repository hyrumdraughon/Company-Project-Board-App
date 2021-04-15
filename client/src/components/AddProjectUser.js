import NavBar from './NavBar'
import ProjectForm from './ProjectForm'

const AddProjectUser = () => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    const addProjectProps = {isAdmin:false}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <ProjectForm>{addProjectProps}</ProjectForm>
            </div>
        </body>
        
    )
}

export default AddProjectUser 