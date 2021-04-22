
import { Row, Container } from 'react-bootstrap'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { TeamContext } from '../context/TeamProvider'
import NavBar from './NavBar'
import SolidDivider from './SolidDivider'
import AddTeam from './AddTeam'
import TeamCard from './TeamCard'


const UserHome = (props) => {
    const {user} = useContext(UserContext)

    const {getProjects, projects, getTeams, team, users} = useContext(TeamContext)

    const teamList = []

    if(projects.length === 0) {
        getProjects()
    }
    
    if(team.name === ''){
        getTeams()
        teamList.push(team)

    }
    
    return (
        <>
            <NavBar></NavBar>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddTeam></AddTeam>
                    {user.teamId !== null ? <TeamCard companyTeams = {teamList} /> : <p style={{color: "blue"}}>No Team Found</p> }
                    {/* <TeamCard team = {{teamName: team.name, text: team.text, users: users}} /> */}
                </Row>
            </Container>
            <SolidDivider></SolidDivider>
            <Container fluid className='hoverAlign'>
                <Row >
                    <AddProject></AddProject>
                    {projects.length !== 0 && user.teamId !== null ? <ProjectCard projects={projects} team={{teamName: team.name}} /> : <p style={{color: "blue"}}>No Projects Found</p> }
                    {/* <ProjectCard projects={projects} team={{teamName: team.name}} /> */}
                </Row>
            </Container>
        </>
    )

};


export default UserHome;