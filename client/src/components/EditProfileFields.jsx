import { Grid } from "@material-ui/core"
import './profile.css'
import Button from './Button'

import { useContext} from 'react'
import { UserContext } from '../context/UserProvider'
import {useState} from 'react'

//TODO: Handle button handler when endpoint is defined
//PROPS
/*
{
    userId: integer that contains the id of the user
}
*/
const EditProfileFields = (props) => {
    const {user,patchUserFields} = useContext(UserContext)

    console.log(patchUserFields)

    const [firstName,updateFirstName] = useState()

    const firstNameSubmission = (event) => {
        updateFirstName(event.target.value)
        console.log(firstName)
    }

    const [lastName,updateLastName] = useState()

    const lastNameSubmission = (event) => {
        updateLastName(event.target.value)
        console.log(lastName)
    }

    const [phone,updatePhone] = useState()

    const phoneSubmission = (event) => {
        updatePhone(event.target.value)
        console.log(phone)
    }

    const sendFormRequest = (event) => {
        event.preventDefault()
        let firstNameSubmit = firstName
        let lastNameSubmit = lastName
        let phoneSubmit = phone
        if(firstNameSubmit === undefined){
            firstNameSubmit = user.firstName
        }
        if(lastNameSubmit === undefined){
            lastNameSubmit = user.lastName
        }
        if(phoneSubmit === undefined){
            phoneSubmit = user.phoneNumber
        } 
        console.log(firstNameSubmit) 
        console.log(lastNameSubmit)
        console.log(phoneSubmit)
        const request = {
            profile:{
                firstName: firstNameSubmit,
                lastName: lastNameSubmit,
                phone: phoneSubmit
            }
        }
        patchUserFields(request)
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
                            <p>First Name:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = {user.firstName} type='text' onChange={firstNameSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div class="flexContainer">
                        <div className="fieldContainer">
                            <p>Last Name:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = {user.lastName} type='text' onChange={lastNameSubmission}/> 
                        </div>
                        <div className = "emptyCenterer"/>
                    </div>
                    <div class="flexContainer">
                        <div className="fieldContainer">
                            <p>Phone:</p>
                        </div>
                        <div className="fieldContentContainer">
                            <input placeholder = {user.phoneNumber} type='text' onChange={phoneSubmission}/> 
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