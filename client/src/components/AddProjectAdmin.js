import NavBar from './NavBar'
import ProjectForm from './ProjectForm'

const AddProjectAdmin = () => {
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    const addProjectProps = {isAdmin:true}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar>{NavHeader}</NavBar>
                <ProjectForm>{addProjectProps}</ProjectForm>
            </div>
        </body>
        
    )
}

export default AddProjectAdmin