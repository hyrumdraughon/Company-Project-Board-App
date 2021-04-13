import { Grid } from "@material-ui/core"
import './project.css'
import Button from './Button'
import ProjectDropDown from "./ProjectDropDown"
import {useState} from 'react'


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

    
    const [team,updateTeam] = useState()


    const teamSubmission = (event) => {
        updateTeam(event.target.value)
        console.log(team)
    }

    const [name,updateName] = useState()

    const nameSubmission = (event) => {
        updateName(event.target.value)
        console.log(name)
    }

    const [description,updateDescription] = useState()

    const descriptionSubmission = (event) => {
        updateDescription(event.target.value)
        console.log(description)
    }

    const sendFormRequest = (event) => {
        event.preventDefault()
        if(name === undefined) updateName('')
        if(description === undefined) updateDescription('')
        try{
            if(team === undefined) throw Error;
        }
        catch{
            console.log('No team defined, error')
        }
        console.log(name)
        console.log(team)
        console.log(description)
    }
    

    const getAllTeams = () => {
        return [
            {
                id: 1,
                name:  "Team Alpha"
            },
            {
                id: 2,
                name: "Team Beta"
            },
            {
                id: 3,
                name: "Team Delta"
            }
        ]
    }


    const dropDownProps = {isAdmin:props.children.isAdmin,teams:getAllTeams(),submission:teamSubmission}
    return(
        <section class = "projectContainer">
            <form onSubmit={sendFormRequest}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div class = "projectContainerBox">
                        <input placeholder = 'Enter project name' type='text' onChange={nameSubmission}/> 
                    </div>
                    <ProjectDropDown>{dropDownProps}</ProjectDropDown>
                    <div class = "projectDescriptionBox">
                        <textarea placeholder = 'Enter project description' onChange={descriptionSubmission}/> 
                    </div>

                    <Button type="submit"></Button>
                    
                </Grid>
            </form>
        </section>
    )
}

export default ProjectForm