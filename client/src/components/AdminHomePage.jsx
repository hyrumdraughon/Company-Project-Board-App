import { Row, Container } from 'react-bootstrap'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider'
import { TeamContext } from '../context/TeamProvider'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import NavBar from './NavBar'
import SolidDivider from './SolidDivider'
import AddTeam from './AddTeam'
import TeamCard from './TeamCard'


const UserHome = (props) => {
    const {user} = useContext(UserContext)
    const {getProjects, projects, getTeams, team, users} = useContext(TeamContext)

    if(projects.length === 0) {
        getProjects()
    }
    
    if(team.name === ''){
        getTeams()

    }
    
    const NavHeader = {companyName:"Cooksys",isAdmin:true,isUser:false,companyID:user.companyId}
    
    return (
        <section>
            <NavBar>{NavHeader}</NavBar>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddTeam></AddTeam>
                    <TeamCard team = {{teamName: team.name, text: team.text, users: users}} />
                </Row>
            </Container>
            <SolidDivider></SolidDivider>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddProject></AddProject>
                    <ProjectCard projects={projects} />
                </Row>
            </Container>
            
           
        </section>
    )

};


export default UserHome;