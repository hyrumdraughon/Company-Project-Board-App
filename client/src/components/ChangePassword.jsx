import { Grid } from "@material-ui/core"
import './profile.css'
import Button from './Button'


import {useState} from 'react'

//TODO: Handle button handler when endpoint is defined
//PROPS
/*
{
    userId: integer that contains the id of the user
}
*/
const EditProfileFields = () => {

    const [oldPassword,updateOldPassword] = useState()

    const oldPasswordSubmission = (event) => {
        updateOldPassword(event.target.value)
        console.log(oldPassword)
    }

    const [newPassword,updateNewPassword] = useState()

    const newPasswordSubmission = (event) => {
        updateNewPassword(event.target.value)
        console.log(newPassword)
    }

    const [confirmPassword,updateConfirmPassword] = useState()

    const confirmPasswordSubmission = (event) => {
        updateConfirmPassword(event.target.value)
        console.log(confirmPassword)
    }

    const sendFormRequest = (event) => {
        event.preventDefault()
        console.log(oldPassword) 
        console.log(newPassword)
        console.log(confirmPassword)
        if(newPassword != confirmPassword){
            console.log("Passwords do not match")
        }
    }

    return(
        <section className = "projectContainer">
            <div class = "topMargin"/>
            <form class = "formContainer " onSubmit={sendFormRequest}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div class="flexContainer">
                        <div class="fieldContainer">
                            <p>Old Password:</p>
                        </div>
                        <div class="fieldContentContainer">
                            <input placeholder = "Old password" type='text' onChange={oldPasswordSubmission}/> 
                        </div>
                    </div>
                    <div class="flexContainer">
                        <div class="fieldContainer">
                            <p>New password:</p>
                        </div>
                        <div class="fieldContentContainer">
                            <input placeholder = "New password" type='text' onChange={newPasswordSubmission}/> 
                        </div>
                    </div>
                    <div class="flexContainer">
                        <div class="fieldContainer">
                            <p>Confirm password:</p>
                        </div>
                        <div class="fieldContentContainer">
                            <input placeholder = "Confirm password" type='text' onChange={confirmPasswordSubmission}/> 
                        </div>
                    </div>   
                    <Button type="submit" label = "Submit"/>
                </Grid>
            </form>
        </section>
    )
}

export default EditProfileFields