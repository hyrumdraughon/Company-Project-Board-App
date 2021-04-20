import NavBar from './NavBar'
import ViewProject from './ViewProject'
import DummyText from '../testData/dummyText'

const ViewProjectPage = () => {
    const viewTestProps = {projectTitle:'This is a test project',teamName:'This is a test team name',projectDescription:DummyText()}
    return(
        <body>
            <div className = 'page-container'>
                <NavBar></NavBar>
                <ViewProject>{viewTestProps}</ViewProject>
            </div>
        </body>
        
    )
}

export default ViewProjectPage