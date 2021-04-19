import { Grid } from "@material-ui/core"
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Link } from 'react-router-dom';

import './profile.css'
import Button from './Button'


const ViewProfile = (props) => {
    const {user} = useContext(UserContext)
    const firstname = user.firstName
    const lastname = user.lastName
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
                <div class="flexContainer">
                    <div className="fieldContainer">
                        <p>First Name:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{firstname}</p>
                    </div>
                    <div className = "emptyCenterer"/>
                </div>   
                <div class="flexContainer">
                    <div className="fieldContainer">
                        <p>Last Name:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{lastname}</p>
                    </div>
                    <div className = "emptyCenterer"/>
                </div>  
                <div class="flexContainer">
                    <div className="fieldContainer">
                        <p>E-mail:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{email}</p>
                    </div>
                    <div className = "emptyCenterer"/>
                </div>   
                <div className="flexContainer">
                    <div className="fieldContainer">
                        <p>Phone:</p>
                    </div>
                    <div className="fieldContentContainer">
                        <p>{phone}</p>
                    </div>
                    <div className = "emptyCenterer"/>
                </div>   
                <div className = "buttonMargin"/>
                <div className = "flexContainer">
                    <Link to='/changePassword'><Button label = "Change password"/></Link>
                    <div className = "buttonMargin"/>
                    <Link to='/editProfile'><Button label = "Edit fields"/></Link>
                    <div className = "buttonMargin"/>
                    <Link to='/adminHomepage'><Button label = "Admin Homepage"/></Link>
                </div>
                
            </Grid>
        </section>
    )
}

export default ViewProfile