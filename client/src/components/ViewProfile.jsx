import { Grid } from "@material-ui/core"
import { useContext, UseContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Link } from 'react-router-dom';

import './profile.css'
import Button from './Button'


const ViewProfile = (props) => {
    const {user} = useContext(UserContext)
    const name = user.firstName + " " + user.lastName
    const phone = user.phone
    const email = user.email
    return(
        <section className = "projectContainer">
            <div class = "topMargin"/>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div class="flexContainer">
                    <div class="fieldContainer">
                        <p>Name:</p>
                    </div>
                    <div class="fieldContentContainer">
                        <p>{name}</p>
                    </div>
                </div>   
                <div class="flexContainer">
                    <div class="fieldContainer">
                        <p>E-mail:</p>
                    </div>
                    <div class="fieldContentContainer">
                        <p>{email}</p>
                    </div>
                </div>   
                <div class="flexContainer">
                    <div class="fieldContainer">
                        <p>Phone:</p>
                    </div>
                    <div class="fieldContentContainer">
                        <p>{phone}</p>
                    </div>
                </div>   
                <Button label = "Change password"/>
                <div class = "buttonMargin"/>
                <Link to='/editProfile'><Button label = "Edit fields"/></Link>
            </Grid>
        </section>
    )
}

export default ViewProfile