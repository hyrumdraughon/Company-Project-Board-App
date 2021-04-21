import { Grid } from "@material-ui/core"
import './profile.css'
import Button from './Button'

import { useContext} from 'react'
import { UserContext } from '../context/UserProvider'
import {useState} from 'react'
import { Redirect } from "react-router"
import {TeamContext} from "../context/TeamProvider"

//TODO: Handle button handler when endpoint is defined
//PROPS
/*
{
    userId: integer that contains the id of the user
}
*/
const PostTeamForm = (props) => {
    const {user} = useContext(UserContext)
    const {createTeam} = useContext(TeamContext)

    const [name,updateName] = useState()

    const nameSubmission = (event) => {
        updateName(event.target.value)
        console.log(name)
    }

    const [text,updateText] = useState()

    const textSubmission = (event) => {
        updateText(event.target.value)
        console.log(text)
    }

    const sendFormRequest = (event) => {
        event.preventDefault()
        if(name !==  undefined || user.companyId !== undefined){
            const request = {
                name: name,
                text: text,
                companyId: user.companyId
            }
            console.log(request)
            createTeam(request)
        }
    }

    return(
        <section className = "projectContainer">
            <div className = "topMargin"/>
            <form className = "formContainer " onSubmit={sendFormRequest}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div className="flexContainer">
                        <div className="fieldContainer">
                            <p>Name:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = 'Input team name here' type='text' onChange={nameSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div class="flexContainer">
                        <div className="fieldContainer">
                            <p>Text:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = 'Input team text here' type='text' onChange={textSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div className = "buttonMargin"/>
                    <Button type="submit" label = "Submit"/>
                </Grid>
            </form>
        </section>
    )
}

export default PostTeamForm