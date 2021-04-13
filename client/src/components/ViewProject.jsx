import { Grid } from "@material-ui/core"
import './project.css'
import Button from './Button'

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
const ViewProject = (props) => {
    console.log(props.children)
    return(
        <section class = "projectContainer">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div class = "projectContainerBox">
                    <p>{props.children.projectTitle}</p>
                </div>
                <div class = "projectContainerBox">
                    <p>{props.children.teamName}</p>
                </div>
                <div class = "projectDescriptionBox">
                    <p>{props.children.projectDescription}</p>
                </div>
                <div>
                    <Button></Button>
                </div>
                
                
            </Grid>
        </section>
    )
}

export default ViewProject