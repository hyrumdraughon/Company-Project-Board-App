import { Grid } from "@material-ui/core"
import './project.css'
import Button from './Button'
import dummyText from '../testData/dummyText'


//TODO: Handle button handler when endpoint is defined
//PROPS
/*
{
    projectTitle: string that contains the name of the project
    teamName: string that contains the name of the team
    projectDescription: string that contains the description of the project
    projectID: id of the project, used for complete button
}
*/
const ProjectForm = (props) => {
    const sendFormRequest = () => {
        
    }

    console.log(props.children)
    return(
        <section class = "projectContainer">
            <form>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div class = "projectContainerBox">
                        <input placeholder = 'Enter project name' type='text'/> 
                    </div>
                    <div class = "projectContainerBox">
                        <p>Team Name</p>
                    </div>
                    <div class = "projectDescriptionBox">
                        <textarea placeholder = 'Enter project description'/> 
                    </div>
                            
                            
                    
                    <Button type="submit"></Button>
                    
                </Grid>
            </form>
        </section>
    )
}

export default ProjectForm