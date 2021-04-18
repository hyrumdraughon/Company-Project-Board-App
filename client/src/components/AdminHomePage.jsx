import { Row, Container } from 'react-bootstrap'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import NavBar from './NavBar'
import SolidDivider from './SolidDivider'


const UserHome = (props) => {
    const user = useContext(UserContext)

    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    
    return (
        <>
            <NavBar>{NavHeader}</NavBar>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddProject></AddProject>
                    <ProjectCard projects={user.projects} />
                </Row>
            </Container>
            <SolidDivider></SolidDivider>
        </>
    )

};


export default UserHome;