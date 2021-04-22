import { Grid } from "@material-ui/core"
import './project.css'
import Button from './Button'
import ProjectDropDown from "./ProjectDropDown"
import {useState,useEffect} from 'react'

import axios from 'axios'

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

import { CompanyContext } from "../context/CompanyProvider"
import { TeamContext } from "../context/TeamProvider"


const ProjectForm = () => {



    const {user,isAdmin} = useContext(UserContext)
    const {companyTeams,getCompanyTeams,getCompanyProjects} = useContext(CompanyContext)
    const {getProjects} = useContext(TeamContext)
    if(companyTeams.length  == 0){
        getCompanyTeams(user.companyId)
        console.log(companyTeams)
    }
    
    const [teamId,updateTeam] = useState()

    

    const teamSubmission = (event) => {
        updateTeam(event.target.value)
        console.log(teamId)
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
        let teamIdSubmit = teamId;
        if(name === undefined) updateName('')
        if(description === undefined) updateDescription('')
        if(isAdmin === false) teamIdSubmit = user.teamId
        try{
            if(teamIdSubmit === undefined) throw Error;
        }
        catch{
            console.log('No team defined, error')
        }
        const request = {
            title: name,
            description: description,
            teamId: teamIdSubmit
        }
        console.log(request)
        axios.post('/project',request)
        .then(res => {
            console.log(res)
            const data = {
                name: res.data.title,
                description: res.data.description,
                projectId: res
            }
            console.log(data)
            getProjects()
            getCompanyProjects(user.companyId)
        }).catch( err => {console.error(err)})
    }
    

    



    console.log(isAdmin)

    const dropDownProps = {isAdmin:isAdmin,teams:companyTeams,submission:teamSubmission,companyId:user.companyId}
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
                    <div className = "buttonMargin"/>
                    <Button type="submit" label="Submit"></Button>
                    
                </Grid>
            </form>
        </section>
    )
}

export default ProjectForm