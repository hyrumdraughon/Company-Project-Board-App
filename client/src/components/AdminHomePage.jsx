import { Row, Container } from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import NavBar from './NavBar'
import SolidDivider from './SolidDivider'
import AddTeam from './AddTeam'
import TeamCard from './TeamCard'


const UserHome = (props) => {
    const user = useContext(UserContext)

    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:0}
    
    return (
        <>
            <NavBar>{NavHeader}</NavBar>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddTeam></AddTeam>
                    <TeamCard projects={user.projects} />
                </Row>
            </Container>
            <SolidDivider></SolidDivider>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddProject></AddProject>
                    <ProjectCard projects={user.projects} />
                </Row>
            </Container>
            
           
        </>
    )

};


export default UserHome;