
import { Row } from 'react-bootstrap'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import NavBar from './NavBar'


const UserHome = (props) => {
    const user = useContext(UserContext)

    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    
    return (
        <>
            <NavBar>{NavHeader}</NavBar>
            <Row className='rowAlign'>
            <AddProject></AddProject>
            <ProjectCard projects={user.projects} />
            </Row>
        </>
    )

};


export default UserHome;