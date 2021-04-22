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
    const buttonProps = {label:'Complete'}
    return(
        <section className = "projectContainer">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div className = "projectContainerBox">
                   <u><p><b>Project Name</b></p></u>
                    <p>{props.children.projectTitle}</p>
                </div>
                <div className = "projectContainerBox">
                <u><p><b>Team Name</b></p></u>
                    <p>{props.children.teamName}</p>
                </div>
                <div className = "projectDescriptionBox">
                    <u><p><b>Project Description</b></p></u>
                    <p>{props.children.projectDescription}</p>
                </div>
                <div className = "buttonMargin"/>
                <div>
                    <Button label="Complete">{buttonProps}</Button>
                </div>
                
                
            </Grid>
        </section>
    )
}

export default ViewProject