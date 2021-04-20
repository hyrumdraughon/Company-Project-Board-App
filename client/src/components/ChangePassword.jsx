import { Grid } from "@material-ui/core"

import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
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

    const {user,patchPassword} = useContext(UserContext)

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
        if(newPassword !== confirmPassword){
            console.log("Passwords do not match")
        }
        const requestBody = {
            email : user.email,
            password : oldPassword,
            newPassword : newPassword
        }
        console.log(requestBody)
        patchPassword(requestBody)
    }

    return(
        <section className = "projectContainer">
            <div classname = "topMargin"/>
            <form classname = "formContainer " onSubmit={sendFormRequest}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div className="flexContainer">
                        <div className="fieldContainer">
                            <p>Old Password:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = "Old password" type='text' onChange={oldPasswordSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div className="flexContainer">
                        <div className="fieldContainer">
                            <p>New password:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = "New password" type='text' onChange={newPasswordSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div className="flexContainer">
                        <div className="fieldContainer">
                            <p>Confirm password:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = "Confirm password" type='text' onChange={confirmPasswordSubmission}/> 
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

export default EditProfileFields