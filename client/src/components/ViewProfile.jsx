import { Grid } from "@material-ui/core"
import { useContext } from 'react'
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
            <div className = "topMargin"/>
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
                        <p>{name}</p>
                    </div>
                </div>   
                <div className="flexContainer">
                    <div className="fieldContainer">
                        <p>E-mail:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{email}</p>
                    </div>
                </div>   
                <div className="flexContainer">
                    <div className="fieldContainer">
                        <p>Phone:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{phone}</p>
                    </div>
                </div>   
                <Link to='/changePassword'><Button label = "Change password"/></Link>
                <div className = "buttonMargin"/>
                <Link to='/editProfile'><Button label = "Edit fields"/></Link>
            </Grid>
        </section>
    )
}

export default ViewProfile