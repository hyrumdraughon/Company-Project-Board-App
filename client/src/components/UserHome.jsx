
import { Row, Container } from 'react-bootstrap'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import NavBar from './NavBar'


const UserHome = (props) => {
    const user = useContext(UserContext)

    
    return (
        <>
            <NavBar></NavBar>
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